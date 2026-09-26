import React, { useState, useEffect } from 'react';
import * as examService from '../../services/examService';
import * as resultService from '../../services/resultService';
import ExamCard from '../../components/ExamCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import { FileText, Search, Code, Layout, Server, Database, Briefcase, Layers } from 'lucide-react';

const AvailableExams = () => {
  const [exams, setExams] = useState([]);
  const [userResults, setUserResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Programming',
    'Frontend',
    'Backend',
    'Database',
    'Interview Prep',
  ];

  useEffect(() => {
    const initData = async () => {
      try {
        const [examsData, resultsData] = await Promise.all([
          examService.getExams(),
          resultService.getMyResults().catch(() => []),
        ]);
        setExams(examsData);
        setUserResults(resultsData || []);
      } catch (err) {
        console.error('Failed to load published exams or results:', err);
      } finally {
        setLoading(false);
      }
    };

    initData();
  }, []);

  const filteredExams = exams.filter((exam) => {
    const matchesSearch =
      exam.title.toLowerCase().includes(search.toLowerCase()) ||
      (exam.description && exam.description.toLowerCase().includes(search.toLowerCase()));

    const examCat = exam.category || 'Programming';
    const matchesCategory =
      selectedCategory === 'All' ||
      examCat.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === 'Interview Prep' && (examCat.includes('Interview') || examCat.includes('Computer Science')));

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.85rem', marginBottom: '0.25rem' }}>Technical Skill Assessments</h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Select an assessment to test your knowledge with randomized question sets
          </p>
        </div>

        {/* Search Bar */}
        <div className="filter-input-wrap" style={{ maxWidth: '300px', width: '100%' }}>
          <Search size={18} />
          <input
            type="text"
            className="form-control"
            placeholder="Search assessments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="category-pills">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <LoadingSpinner fullPage message="Fetching technical assessments..." />
      ) : filteredExams.length > 0 ? (
        <div className="exams-grid">
          {filteredExams.map((exam) => (
            <ExamCard key={exam._id} exam={exam} userResults={userResults} />
          ))}
        </div>
      ) : (
        <div className="glass-card empty-state">
          <FileText className="empty-state-icon" />
          <h3>No assessments match your criteria</h3>
          <p>
            {search || selectedCategory !== 'All'
              ? 'Try adjusting your search query or selecting another domain category.'
              : 'There are no active assessments published right now.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default AvailableExams;
