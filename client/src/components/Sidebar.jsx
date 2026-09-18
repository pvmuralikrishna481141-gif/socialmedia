import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, MessageCircle, Search, PenTool, User, Bell, LogOut, BookOpen } from 'lucide-react';

const Sidebar = ({ onLogout, onPostClick, user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-logo" onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>
            Socially
        </div>
        
        <nav className="nav-menu">
          <NavItem 
            icon={<Home size={26} />} 
            text="Home" 
            active={isActive('/home')} 
            onClick={() => navigate('/home')} 
          />
          
          <NavItem 
            icon={<MessageCircle size={26} />} 
            text="Chat" 
            active={location.pathname.startsWith('/chat')} 
            onClick={() => navigate('/chat')} 
          />
          
          <NavItem 
            icon={<Search size={26} />} 
            text="Explore" 
            active={isActive('/explore')} 
            onClick={() => navigate('/explore')} 
          />
          
          <NavItem 
            icon={<PenTool size={26} />} 
            text="Post" 
            onClick={onPostClick} 
          />
          
          <NavItem 
            icon={<User size={26} />} 
            text="Profile" 
            active={isActive('/profile')} 
            onClick={() => navigate('/profile')} 
          />
          
          <NavItem 
            icon={<Bell size={26} />} 
            text="Notification" 
            active={isActive('/notifications')} 
            onClick={() => navigate('/notifications')} 
          />
        </nav>

        {/* --- STUDYVERSE BUTTON (Visible on all pages) --- */}
        <button 
          className="studyverse-btn" 
          onClick={() => navigate('/studyverse')}
          style={{ 
            marginTop: '20px',
            width: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            padding: '12px', borderRadius: '30px', border: 'none',
            background: 'linear-gradient(90deg, #ec4899, #8b5cf6)', 
            color: 'white', fontWeight: 'bold', fontSize: '1rem',
            cursor: 'pointer', transition: 'transform 0.2s',
            boxShadow: '0 4px 15px rgba(236, 72, 153, 0.4)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <BookOpen size={20} fill="white" />
          <span>Studyverse</span>
        </button>
      </div>

      <div className="sidebar-footer">
        <div className="user-mini-profile">
          <div className="avatar small">{user?.initials || 'U'}</div>
          <div className="user-info">
            <span className="name">{user?.name || 'User'}</span>
            <span className="handle">@username</span>
          </div>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

// Helper Sub-component
const NavItem = ({ icon, text, active, onClick }) => (
  <div className={`nav-item ${active ? 'active' : ''}`} onClick={onClick}>
    {icon}
    <span>{text}</span>
  </div>
);

export default Sidebar;