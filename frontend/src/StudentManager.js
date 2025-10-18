import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import useStudents from './hooks/useStudents';
import './styles/StudentManager.css';

function StudentManager() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    student_id: '',
    email: ''
  });
  const [editingId, setEditingId] = useState(null);

  const {
    students,
    loading,
    error,
    createStudent,
    updateStudent,
    deleteStudent
  } = useStudents();

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
      result = await updateStudent(editingId, formData);
    } else {
      result = await createStudent(formData);
    }
    
    alert(result.message);
    
    if (result.success) {
      setFormData({ first_name: '', last_name: '', student_id: '', email: '' });
      setEditingId(null);
    }
  };

  const handleEdit = (student) => {
    setFormData({
      first_name: student.first_name,
      last_name: student.last_name,
      student_id: student.student_id,
      email: student.email
    });
    setEditingId(student.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      const result = await deleteStudent(id);
      alert(result.message);
    }
  };

  const handleCancel = () => {
    setFormData({ first_name: '', last_name: '', student_id: '', email: '' });
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
        <h1>Student Management</h1>
        <button onClick={() => navigate('/')} className="btn btn-nav">
          📚 Go to Subjects
        </button>
      </div>
      
      <StudentForm
        formData={formData}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onCancel={handleCancel}
        isEditing={editingId !== null}
      />

      <StudentList
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default StudentManager;