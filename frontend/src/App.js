import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubjectManager from './SubjectManager';
import StudentManager from './StudentManager';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SubjectManager />} />
          <Route path="/students" element={<StudentManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;