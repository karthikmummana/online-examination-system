import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import * as resultService from '../../services/resultService';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Users, Search, Calendar, Award } from 'lucide-react';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await resultService.getStudentsList();
        setStudents(data);
      } catch (err) {
        console.error('Failed to load student directory:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-layout">
      <Sidebar />

      <main className="admin-main">
        <div className="admin-header">
          <div className="admin-title-box">
            <h1>Candidate Student Directory</h1>
            <p>Manage registered candidates and monitor cumulative performance</p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="filter-bar">
          <div className="filter-input-wrap">
            <Search size={18} />
            <input
              type="text"
              className="form-control"
              placeholder="Search candidate by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <LoadingSpinner fullPage message="Loading candidate directory..." />
        ) : filtered.length > 0 ? (
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Candidate Name</th>
                  <th>Email Address</th>
                  <th>Joined Date</th>
                  <th>Attempts Count</th>
                  <th>Average Score</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((student) => (
                  <tr key={student._id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div
                          className="user-avatar-mini"
                        >
                          {student.name.charAt(0).toUpperCase()}
                        </div>
                        <span style={{ fontWeight: 600 }}>{student.name}</span>
                      </div>
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>{student.email}</td>
                    <td style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Calendar size={13} />
                        {new Date(student.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-primary">
                        {student.examsAttempted} {student.examsAttempted === 1 ? 'Attempt' : 'Attempts'}
                      </span>
                    </td>
                    <td>
                      <span
                        className="badge"
                        style={{
                          background:
                            student.averageScore >= 70
                              ? 'var(--accent-emerald-light)'
                              : student.averageScore >= 50
                              ? 'var(--accent-amber-light)'
                              : 'var(--accent-rose-light)',
                          color:
                            student.averageScore >= 70
                              ? 'var(--accent-emerald)'
                              : student.averageScore >= 50
                              ? 'var(--accent-amber)'
                              : 'var(--accent-rose)',
                        }}
                      >
                        {student.averageScore}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="glass-card empty-state">
            <Users className="empty-state-icon" />
            <h3>No registered candidates found</h3>
            <p>Candidates will appear here once they register on the platform.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Students;
