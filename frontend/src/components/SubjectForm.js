import React from 'react';
import '../styles/SubjectForm.css';

function SubjectForm({ formData, onSubmit, onChange, onCancel, isEditing }) {
  return (
    <div className="form-section">
      <h2>{isEditing ? 'Edit Subject' : 'Create New Subject'}</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Subject Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
            placeholder="e.g., Mathematics"
          />
        </div>
        
        <div className="form-group">
          <label>Subject Code:</label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={onChange}
            required
            placeholder="e.g., MATH101"
          />
        </div>
        
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={onChange}
            placeholder="Enter subject description"
            rows="3"
          />
        </div>
        
        <div className="button-group">
          <button type="submit" className="btn btn-primary">
            {isEditing ? 'Update Subject' : 'Create Subject'}
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

export default SubjectForm;