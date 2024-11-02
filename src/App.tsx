import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatRoom from '../src/pages/chatRoom';
import ChatListRoom from './pages/chatListRoom';
import FriendListRoom from './pages/friendListRoom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatRoom />} />
        <Route path="/chatListRoom" element={<ChatListRoom />} />
        <Route path="/friendListRoom" element={<FriendListRoom />} />
        {/* 기본 경로: ChatRoom */}
      </Routes>
    </Router>
  );
}

export default App;
