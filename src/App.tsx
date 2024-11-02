import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatRoom from '../src/pages/chatRoom';
import ChatList from '../src/pages/chatList';
import FriendList from './pages/friendList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatRoom />} />
        <Route path="/chatList" element={<ChatList />} />
        <Route path="/friendList" element={<FriendList />} />
        {/* 기본 경로: ChatRoom */}
      </Routes>
    </Router>
  );
}

export default App;
