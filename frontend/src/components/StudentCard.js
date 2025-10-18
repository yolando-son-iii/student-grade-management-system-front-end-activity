import React from 'react';
import '../styles/StudentCard.css';

function StudentCard({ student, onEdit, onDelete }) {
  return (
    <div className="student-card">
      <h3>{student.first_name} {student.last_name}</h3>
      <p className="student-id">ID: {student.student_id}</p>
      <p className="student-email">📧 {student.email}</p>
      <div className="card-actions">
        <button onClick={() => onEdit(student)} className="btn btn-edit">
          Edit
        </button>
        <button onClick={() => onDelete(student.id)} className="btn btn-delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;