import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowUpRight } from 'lucide-react';
import Sidebar from './Sidebar'; // 1. IMPORT SIDEBAR
import PostPage from './PostPage'; 

const ExplorePage = ({ onLogout, user }) => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const categories = ["For You", "Trending", "News", "Sports", "Entertainment"];
  const exploreImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=600&q=80", span: "row-span-2" },
    { id: 2, src: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80", span: "col-span-1" },
    { id: 3, src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80", span: "row-span-2" },
    { id: 4, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80", span: "col-span-1" },
    { id: 5, src: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80", span: "col-span-2" },
    { id: 6, src: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=600&q=80", span: "row-span-1" },
  ];

  return (
    <div className="home-container">
      {/* 2. REPLACE HARDCODED SIDEBAR WITH COMPONENT */}
      <Sidebar 
        onLogout={onLogout} 
        user={user} 
        onPostClick={() => setIsPostModalOpen(true)} 
      />

      <main className="main-feed" style={{ padding: '0 20px 40px' }}>
        <header className="feed-header" style={{ marginBottom: '20px' }}>
          <h2>Explore</h2>
          <div className="search-bar" style={{ marginTop: '10px', background: 'var(--bg-secondary)', padding: '10px 20px', borderRadius: '30px', display: 'flex', alignItems: 'center' }}>
            <Search size={18} color="#666" />
            <input type="text" placeholder="Search Socially" style={{ border: 'none', background: 'transparent', marginLeft: '10px', outline: 'none', width: '100%', fontSize: '1rem', color: 'var(--text-primary)' }} />
          </div>
        </header>

        {/* Categories */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '25px', overflowX: 'auto', paddingBottom: '5px' }}>
          {categories.map((cat, i) => (
            <span key={i} style={{ padding: '8px 16px', background: i === 0 ? '#1d9bf0' : 'var(--bg-secondary)', color: i === 0 ? 'white' : 'var(--text-primary)', borderRadius: '20px', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              {cat}
            </span>
          ))}
        </div>

        {/* Masonry Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', autoRows: '200px' }}>
          {exploreImages.map((img) => (
            <motion.div 
              key={img.id} 
              className={img.span}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer' }}
            >
              <img src={img.src} alt="Explore" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 10, right: 10, background: 'rgba(0,0,0,0.6)', padding: '5px', borderRadius: '50%' }}>
                <ArrowUpRight color="white" size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      
      <div className="right-sidebar-placeholder"></div>
      {isPostModalOpen && <PostPage onClose={() => setIsPostModalOpen(false)} user={user} />}
    </div>
  );
};

export default ExplorePage;