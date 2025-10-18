import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubjectForm from './components/SubjectForm';
import SubjectList from './components/SubjectList';
import useSubjects from './hooks/useSubjects';
import './styles/SubjectManager.css';

function SubjectManager() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    description: ''
  });
  const [editingId, setEditingId] = useState(null);

  const {
    subjects,
    loading,
    error,
    createSubject,
    updateSubject,
    deleteSubject
  } = useSubjects();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let result;
    if (editingId) {
      result = await updateSubject(editingId, formData);
    } else {
      result = await createSubject(formData);
    }
    
    alert(result.message);
    
    if (result.success) {
      setFormData({ name: '', code: '', description: '' });
      setEditingId(null);
    }
  };

  const handleEdit = (subject) => {
    setFormData({
      name: subject.name,
      code: subject.code,
      description: subject.description
    });
    setEditingId(subject.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this subject?')) {
      const result = await deleteSubject(id);
      alert(result.message);
    }
  };

  const handleCancel = () => {
    setFormData({ name: '', code: '', description: '' });
    setEditingId(null);
  };

  if (loading) {
    return <div className="container"><p className="loading">Loading...</p></div>;
  }

  if (error) {
    return <div className="container"><p className="error">{error}</p></div>;
  }

  return (
    <div className="container">
      <div className="header-nav">
        <h1>School Subject Management</h1>
        <button onClick={() => navigate('/students')} className="btn btn-nav">
          👨‍🎓 Go to Students
        </button>
      </div>
      
      <SubjectForm
        formData={formData}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onCancel={handleCancel}
        isEditing={editingId !== null}
      />

      <SubjectList
        subjects={subjects}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default SubjectManager;