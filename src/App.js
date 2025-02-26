import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePages from './Pages/HomePages';
import ToDoList from './Pages/ToDoList';
import PhoneBook from './Pages/PhoneBook';
import StudentGradeChecker from './Pages/StudentGradeChecker';

function App() {

  const shinyBlackStyle = {
    background: 'linear-gradient(45deg, #870505, #000000)',
  };

  return (
    <Router>
      <div style={shinyBlackStyle}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/ToDoList" element={<ToDoList />} />
          <Route path="/PhoneBook" element={<PhoneBook />} />
          <Route path="/StudentGradeChecker" element={<StudentGradeChecker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;