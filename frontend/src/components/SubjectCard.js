import React from 'react';
import '../styles/SubjectCard.css';

function SubjectCard({ subject, onEdit, onDelete }) {
  return (
    <div className="subject-card">
      <h3>{subject.name}</h3>
      <p className="subject-code">{subject.code}</p>
      <p className="subject-description">
        {subject.description || 'No description'}
      </p>
      <div className="card-actions">
        <button onClick={() => onEdit(subject)} className="btn btn-edit">
          Edit
        </button>
        <button onClick={() => onDelete(subject.id)} className="btn btn-delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default SubjectCard;