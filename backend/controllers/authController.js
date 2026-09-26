const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @desc    Register a new student
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide all required fields: name, email, and password' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const userExists = await User.findOne({ email: normalizedEmail });

    if (userExists) {
      return res.status(400).json({ message: 'A user with this email address already exists' });
    }

    // Strictly enforce role as student for all public registrations
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password,
      role: 'student',
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user registration data provided' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message || 'Registration failed' });
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please enter both email and password' });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message || 'Login failed' });
  }
};

// @desc    Get current logged in user profile
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const { OAuth2Client } = require('google-auth-library');
const crypto = require('crypto');

const DEFAULT_GOOGLE_CLIENT_ID =
  '242136350913-m0cdqpn421a8ns83s91sonl4uvg7j327.apps.googleusercontent.com';

// @desc    Authenticate with Google OAuth
// @route   POST /api/auth/google
// @access  Public
const googleAuth = async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({ message: 'Google credential token is required' });
    }

    const targetClientId = process.env.GOOGLE_CLIENT_ID || DEFAULT_GOOGLE_CLIENT_ID;
    const googleClient = new OAuth2Client(targetClientId);

    // Verify Google ID token securely using google-auth-library
    let payload;
    try {
      const ticket = await googleClient.verifyIdToken({
        idToken: credential,
        audience: targetClientId,
      });
      payload = ticket.getPayload();
    } catch (verifyErr) {
      console.error('[Google Auth Verification Error]', verifyErr.message);
      return res.status(400).json({ message: 'Google sign-in failed. Invalid or expired token.' });
    }

    if (!payload || !payload.email) {
      return res.status(400).json({ message: 'Google sign-in failed. Email missing from token.' });
    }

    const verifiedEmail = payload.email.toLowerCase().trim();
    const verifiedName = payload.name || payload.given_name || 'Google Student';
    const googleId = payload.sub;

    let user = await User.findOne({ email: verifiedEmail });

    if (!user) {
      // Create new student account for Google user (NEVER assign admin role)
      const randomPassword = crypto.randomBytes(16).toString('hex');
      user = await User.create({
        name: verifiedName.trim(),
        email: verifiedEmail,
        password: randomPassword,
        googleId,
        authProvider: 'google',
        role: 'student', // Strictly student role for Google Sign-In
      });
    } else {
      // Update googleId if missing
      if (googleId && !user.googleId) {
        user.googleId = googleId;
        if (!user.authProvider || user.authProvider === 'local') {
          user.authProvider = 'google';
        }
        await user.save();
      }
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      authProvider: user.authProvider || 'google',
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error('Google Auth Controller Error:', error);
    res.status(500).json({ message: 'Google authentication failed. Please try again.' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  googleAuth,
};


