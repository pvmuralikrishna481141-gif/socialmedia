import React, { useState } from 'react';
import { 
  Image as ImageIcon, Film, BarChart2, Smile, Heart, MessageCircle, Repeat, Share 
} from 'lucide-react';
import ThemeToggle from './ThemeToggle'; 
import PostPage from './PostPage'; 
import Sidebar from './Sidebar'; // 1. IMPORT SIDEBAR COMPONENT

const HomePage = ({ onLogout, theme, toggleTheme, user }) => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  return (
    <div className="home-container">
      {/* Theme Toggle */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      {/* --- SIDEBAR (Replaced hardcoded sidebar with Component) --- */}
      <Sidebar 
        onLogout={onLogout} 
        user={user} 
        onPostClick={() => setIsPostModalOpen(true)} 
      />

      {/* --- MAIN FEED --- */}
      <main className="main-feed">
        <header className="feed-header">
          <h2>Home</h2>
        </header>

        {/* Post Composer - Opens Modal on Click */}
        <div className="post-composer" onClick={() => setIsPostModalOpen(true)}>
          <div className="composer-row">
            <div className="avatar">{user?.initials || 'U'}</div>
            <input type="text" placeholder="What's happening?" className="composer-input" readOnly />
          </div>
          <div className="composer-actions">
            <div className="icon-group">
              <ImageIcon size={20} className="action-icon" />
              <Film size={20} className="action-icon" />
              <BarChart2 size={20} className="action-icon" />
              <Smile size={20} className="action-icon" />
            </div>
            <button className="post-btn">Post</button>
          </div>
        </div>

        {/* FEED LIST */}
        <div className="feed-list">
          {dummyPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
      
      {/* Right Sidebar Placeholder (for grid layout balance) */}
      <div className="right-sidebar-placeholder"></div>

      {/* --- POST MODAL OVERLAY --- */}
      {isPostModalOpen && (
        <PostPage 
          onClose={() => setIsPostModalOpen(false)} 
          user={user} 
        />
      )}
    </div>
  );
};

// --- Sub-Components ---

const PostCard = ({ post }) => (
  <article className="post-card">
    <div className="post-avatar">
      {post.avatarUrl ? (
        <img src={post.avatarUrl} alt={post.name} className="avatar" />
      ) : (
        <div className="avatar">{post.initials}</div>
      )}
    </div>
    <div className="post-content">
      <div className="post-header">
        <span className="post-name">{post.name}</span>
        <span className="post-handle">{post.handle}</span>
        <span className="post-dot">·</span>
        <span className="post-time">{post.time}</span>
      </div>
      
      <p className="post-text">{post.content}</p>

      {post.image && (
        <img src={post.image} alt="Post attachment" className="post-image" />
      )}
      
      <div className="post-actions">
        <div className="action-item blue">
          <MessageCircle size={18} />
          <span>{post.comments}</span>
        </div>
        <div className="action-item green">
          <Repeat size={18} />
          <span>{post.retweets}</span>
        </div>
        <div className="action-item pink">
          <Heart size={18} />
          <span>{post.likes}</span>
        </div>
        <div className="action-item blue">
          <Share size={18} />
        </div>
      </div>
    </div>
  </article>
);

// --- Dummy Feed Data ---
const dummyPosts = [
  {
    id: 1,
    name: "John Doe",
    handle: "@johndoe",
    initials: "JD",
    time: "2h",
    content: "Just had an amazing day at the beach! The sunset was absolutely beautiful. 🌅 Sometimes you just need to disconnect to reconnect.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    comments: 12, retweets: 4, likes: 42
  },
  {
    id: 2,
    name: "Sarah Williams",
    handle: "@sarah_ux",
    initials: "SW",
    time: "3h",
    content: "Working on a new UI kit for the client. Clean, minimal, and dark mode ready. It's amazing how much color theory impacts user retention. What do you think?",
    comments: 23, retweets: 15, likes: 89
  },
  {
    id: 3,
    name: "Mike Johnson",
    handle: "@mikej",
    initials: "MJ",
    time: "4h",
    content: "Coffee and coding - the perfect combination ☕. Finally fixed that bug that was haunting me all weekend. It was a missing semicolon. Classic.",
    comments: 45, retweets: 8, likes: 156
  },
  {
    id: 4,
    name: "Tech Insider",
    handle: "@tech_news",
    initials: "TI",
    time: "5h",
    content: "Breaking: The new AI models released today are showcasing reasoning capabilities we haven't seen before. The landscape of development is changing rapidly. 🤖 #AI #Tech",
    comments: 112, retweets: 340, likes: 890
  },
  {
    id: 5,
    name: "Emily Chen",
    handle: "@emily_codes",
    initials: "EC",
    time: "6h",
    content: "Started learning Rust today! The compiler is strict but the error messages are actually helpful. Anyone have good resource recommendations for beginners?",
    comments: 56, retweets: 12, likes: 230
  },
  {
    id: 6,
    name: "Nature Daily",
    handle: "@nature_shots",
    initials: "ND",
    time: "8h",
    content: "Morning hike views. The air is so crisp up here. 🏔️",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    comments: 8, retweets: 45, likes: 567
  },
  {
    id: 7,
    name: "David Kim",
    handle: "@dkim_dev",
    initials: "DK",
    time: "10h",
    content: "Unpopular opinion: Light mode isn't that bad if the contrast is calibrated correctly. Don't @ me. 😎",
    comments: 340, retweets: 20, likes: 54
  },
  {
    id: 8,
    name: "Creative Hub",
    handle: "@creative_hub",
    initials: "CH",
    time: "12h",
    content: "Typography isn't just about choosing fonts, it's about establishing hierarchy. A simple weight change can guide the user's eye exactly where you want it.",
    image: "https://images.unsplash.com/photo-1555445054-0107548b393a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    comments: 14, retweets: 89, likes: 421
  },
  {
    id: 9,
    name: "Alex Rivera",
    handle: "@arivera",
    initials: "AR",
    time: "14h",
    content: "Does anyone else have 50 chrome tabs open right now or is it just me? 😅",
    comments: 89, retweets: 30, likes: 210
  },
  {
    id: 10,
    name: "Startup Life",
    handle: "@startup_grind",
    initials: "SL",
    time: "1d",
    content: "The best time to plant a tree was 20 years ago. The second best time is now. Keep building! 🚀",
    comments: 25, retweets: 110, likes: 670
  }
];

export default HomePage;