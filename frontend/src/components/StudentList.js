import React from 'react';
import StudentCard from './StudentCard';
import '../styles/StudentList.css';

function StudentList({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="list-section">
        <h2>Student List</h2>
        <p className="no-students">No students found. Create one above!</p>
      </div>
    );
  }

  return (
    <div className="list-section">
      <h2>Student List ({students.length})</h2>
      <div className="student-grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentList;