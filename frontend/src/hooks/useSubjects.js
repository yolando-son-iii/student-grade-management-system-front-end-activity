import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/subjects/';

function useSubjects() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all subjects
  const fetchSubjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_URL);
      setSubjects(response.data);
    } catch (err) {
      setError('Error fetching subjects');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Create subject
  const createSubject = async (subjectData) => {
    try {
      await axios.post(API_URL, subjectData);
      await fetchSubjects();
      return { success: true, message: 'Subject created successfully!' };
    } catch (err) {
      console.error('Error creating subject:', err);
      return { success: false, message: 'Error creating subject!' };
    }
  };

  // Update subject
  const updateSubject = async (id, subjectData) => {
    try {
      await axios.put(`${API_URL}${id}/`, subjectData);
      await fetchSubjects();
      return { success: true, message: 'Subject updated successfully!' };
    } catch (err) {
      console.error('Error updating subject:', err);
      return { success: false, message: 'Error updating subject!' };
    }
  };

  // Delete subject
  const deleteSubject = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}/`);
      await fetchSubjects();
      return { success: true, message: 'Subject deleted successfully!' };
    } catch (err) {
      console.error('Error deleting subject:', err);
      return { success: false, message: 'Error deleting subject!' };
    }
  };

  // Fetch on mount
  useEffect(() => {
    fetchSubjects();
  }, []);

  return {
    subjects,
    loading,
    error,
    createSubject,
    updateSubject,
    deleteSubject,
    fetchSubjects
  };
}

export default useSubjects;