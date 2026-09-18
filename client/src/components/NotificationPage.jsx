import React, { useState } from 'react';
import { Star, Heart, UserPlus } from 'lucide-react';
import Sidebar from './Sidebar'; // 1. IMPORT SIDEBAR
import PostPage from './PostPage'; 

const NotificationPage = ({ onLogout, user }) => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const notifications = [
    { id: 1, type: 'like', user: "Sarah Williams", text: "liked your post.", icon: <Heart size={20} fill="#f91880" color="#f91880" />, time: "2h" },
    { id: 2, type: 'follow', user: "Mike Johnson", text: "followed you.", icon: <UserPlus size={20} fill="#1d9bf0" color="#1d9bf0" />, time: "5h" },
    { id: 3, type: 'star', user: "Tech Insider", text: "starred your repository.", icon: <Star size={20} fill="#ffd400" color="#ffd400" />, time: "1d" },
    { id: 4, type: 'like', user: "Emily Chen", text: "liked your reply.", icon: <Heart size={20} fill="#f91880" color="#f91880" />, time: "1d" },
  ];

  return (
    <div className="home-container">
      {/* 2. REPLACE HARDCODED SIDEBAR WITH COMPONENT */}
      <Sidebar 
        onLogout={onLogout} 
        user={user} 
        onPostClick={() => setIsPostModalOpen(true)} 
      />

      <main className="main-feed">
        <header className="feed-header">
          <h2>Notifications</h2>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {notifications.map((notif) => (
            <div key={notif.id} style={{ display: 'flex', gap: '15px', padding: '20px', borderBottom: '1px solid var(--border-color)', cursor: 'pointer', transition: 'background 0.2s' }} className="notif-item">
              <div style={{ marginTop: '2px' }}>{notif.icon}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white', marginBottom: '5px' }}>
                  {notif.user.charAt(0)}
                </div>
                <p style={{ fontSize: '1rem' }}>
                  <strong>{notif.user}</strong> {notif.text}
                </p>
                <span style={{ fontSize: '0.85rem', color: '#666' }}>{notif.time}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="right-sidebar-placeholder"></div>
      {isPostModalOpen && <PostPage onClose={() => setIsPostModalOpen(false)} user={user} />}
    </div>
  );
};

export default NotificationPage;