import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatRoom from '../src/pages/chatRoom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatRoom />} /> 
        {/* 기본 경로: ChatRoom */}
      </Routes>
    </Router>
  );
}

export default App;
