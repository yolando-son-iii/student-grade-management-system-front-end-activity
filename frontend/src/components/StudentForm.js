import React from 'react';
import '../styles/StudentForm.css';

function StudentForm({ formData, onSubmit, onChange, onCancel, isEditing }) {
  return (
    <div className="form-section">
      <h2>{isEditing ? 'Edit Student' : 'Create New Student'}</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={onChange}
            required
            placeholder="e.g., John"
          />
        </div>
        
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={onChange}
            required
            placeholder="e.g., Doe"
          />
        </div>
        
        <div className="form-group">
          <label>Student ID:</label>
          <input
            type="text"
            name="student_id"
            value={formData.student_id}
            onChange={onChange}
            required
            placeholder="e.g., 2024-001"
          />
        </div>
        
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
            placeholder="e.g., john.doe@school.com"
          />
        </div>
        
        <div className="button-group">
          <button type="submit" className="btn btn-primary">
            {isEditing ? 'Update Student' : 'Create Student'}
          </button>
          {isEditing && (
            <button type="button" onClick={onCancel} className="btn btn-secondary">
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default StudentForm;