import React from 'react';
import SubjectCard from './SubjectCard';
import '../styles/SubjectList.css';

function SubjectList({ subjects, onEdit, onDelete }) {
  if (subjects.length === 0) {
    return (
      <div className="list-section">
        <h2>Subject List</h2>
        <p className="no-subjects">No subjects found. Create one above!</p>
      </div>
    );
  }

  return (
    <div className="list-section">
      <h2>Subject List</h2>
      <div className="subject-grid">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default SubjectList;