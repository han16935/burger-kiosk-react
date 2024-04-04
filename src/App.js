// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
import SalesStatistics from './SalesStatistics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/salesStatistics" element={<SalesStatistics />} />
      </Routes>
    </Router>
  );
}

export default App;