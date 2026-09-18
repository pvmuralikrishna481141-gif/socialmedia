import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Link as LinkIcon } from 'lucide-react';
import Sidebar from './Sidebar'; // 1. IMPORT SIDEBAR
import PostPage from './PostPage'; 

const ProfilePage = ({ onLogout, user }) => {
  const navigate = useNavigate();
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  return (
    <div className="home-container">
      {/* 2. REPLACE HARDCODED SIDEBAR WITH COMPONENT */}
      <Sidebar 
        onLogout={onLogout} 
        user={user} 
        onPostClick={() => setIsPostModalOpen(true)} 
      />

      <main className="main-feed">
        <header className="feed-header" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ cursor: 'pointer', fontSize: '1.2rem' }} onClick={() => navigate(-1)}>←</div>
          <div>
            <h2 style={{ fontSize: '1.2rem', margin: 0 }}>{user?.name || "User Name"}</h2>
            <span style={{ fontSize: '0.8rem', color: '#666' }}>1,234 posts</span>
          </div>
        </header>

        {/* Cover & Avatar */}
        <div style={{ position: 'relative', marginBottom: '60px' }}>
          <div style={{ height: '180px', background: 'linear-gradient(90deg, #ec4899, #8b5cf6)' }}></div>
          <div style={{ 
            width: '120px', height: '120px', borderRadius: '50%', background: 'var(--bg-primary)', 
            position: 'absolute', bottom: '-60px', left: '20px', padding: '4px' 
          }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#333', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
              {user?.initials || "U"}
            </div>
          </div>
          <button style={{ position: 'absolute', bottom: '-50px', right: '20px', padding: '8px 20px', borderRadius: '20px', border: '1px solid #ccc', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontWeight: 'bold', cursor: 'pointer' }}>
            Edit profile
          </button>
        </div>

        {/* Profile Info */}
        <div style={{ padding: '0 20px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '5px' }}>{user?.name || "User Name"}</h2>
          <p style={{ color: '#666', marginBottom: '15px' }}>@username</p>
          <p style={{ fontSize: '1rem', lineHeight: '1.4', marginBottom: '15px' }}>
            Full-stack developer & UI/UX enthusiast. Building cool things for the web. 🚀
          </p>
          
          <div style={{ display: 'flex', gap: '15px', color: '#666', fontSize: '0.9rem', marginBottom: '15px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={16} /> San Francisco</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><LinkIcon size={16} /> <span style={{ color: '#1d9bf0' }}>github.com/user</span></span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={16} /> Joined January 2024</span>
          </div>

          <div style={{ display: 'flex', gap: '20px', fontSize: '0.95rem' }}>
            <span><strong>240</strong> <span style={{ color: '#666' }}>Following</span></span>
            <span><strong>5,403</strong> <span style={{ color: '#666' }}>Followers</span></span>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', marginTop: '30px', borderBottom: '1px solid var(--border-color)' }}>
          {['Posts', 'Replies', 'Highlights', 'Media', 'Likes'].map((tab, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center', padding: '15px 0', cursor: 'pointer', fontWeight: i===0?'bold':'normal', borderBottom: i===0?'4px solid #1d9bf0':'none', color: i===0?'var(--text-primary)':'#666' }}>
              {tab}
            </div>
          ))}
        </div>
      </main>

      <div className="right-sidebar-placeholder"></div>
      {isPostModalOpen && <PostPage onClose={() => setIsPostModalOpen(false)} user={user} />}
    </div>
  );
};

export default ProfilePage;