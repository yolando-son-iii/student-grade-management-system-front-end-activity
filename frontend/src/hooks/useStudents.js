import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/students/';

function useStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_URL);
      setStudents(response.data);
    } catch (err) {
      setError('Error fetching students');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const createStudent = async (studentData) => {
    try {
      await axios.post(API_URL, studentData);
      await fetchStudents();
      return { success: true, message: 'Student created successfully!' };
    } catch (err) {
      console.error('Error creating student:', err);
      return { success: false, message: 'Error creating student!' };
    }
  };

  const updateStudent = async (id, studentData) => {
    try {
      await axios.put(`${API_URL}${id}/`, studentData);
      await fetchStudents();
      return { success: true, message: 'Student updated successfully!' };
    } catch (err) {
      console.error('Error updating student:', err);
      return { success: false, message: 'Error updating student!' };
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}/`);
      await fetchStudents();
      return { success: true, message: 'Student deleted successfully!' };
    } catch (err) {
      console.error('Error deleting student:', err);
      return { success: false, message: 'Error deleting student!' };
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return {
    students,
    loading,
    error,
    createStudent,
    updateStudent,
    deleteStudent,
    fetchStudents
  };
}

export default useStudents;