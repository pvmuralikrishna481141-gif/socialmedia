import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, Pause, RotateCcw, Users, Book, Video, Headphones, FileText, ArrowLeft 
} from 'lucide-react';

const StudyversePage = () => {
  const navigate = useNavigate();
  
  // --- POMODORO TIMER STATE --
  const [timeLeft, setTimeLeft] = useState(25 * 60); 
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      alert("Focus session complete! Take a break.");
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => { setIsActive(false); setTimeLeft(25 * 60); };

  return (
    <div style={{ 
      minHeight: '100vh', 
      /* --- ADDED BACKGROUND IMAGE HERE --- */
      backgroundImage: 'linear-gradient(rgba(248, 250, 252, 0.92), rgba(248, 250, 252, 0.92)), url('/')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', // Keeps bg fixed while scrolling
      padding: '40px' 
    }}>
      
      {/* --- BACK BUTTON --- */}
      <button 
        onClick={() => navigate('/home')}
        style={{ 
          display: 'flex', alignItems: 'center', gap: '8px', 
          background: 'white', border: '1px solid #e2e8f0', 
          padding: '10px 20px', borderRadius: '30px', 
          fontSize: '1rem', color: '#64748b', cursor: 'pointer',
          marginBottom: '30px', fontWeight: '600', transition: 'all 0.2s',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(-5px)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
      >
        <ArrowLeft size={20} /> Back to Home
      </button>

      {/* --- HEADER --- */}
      <header style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '3.5rem', fontWeight: '800', marginBottom: '10px',
          background: 'linear-gradient(90deg, #ec4899, #8b5cf6)', 
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 2px 10px rgba(139, 92, 246, 0.3))'
        }}>
          Studyverse Hub
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#475569', fontWeight: '500' }}>
          Your dedicated space for focus and productivity.
        </p>
      </header>

      {/* --- MAIN GRID LAYOUT --- */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* TOP SECTION: TIMER & STATS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', marginBottom: '50px' }}>
          
          {/* Focus Timer Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgba(255,255,255,0.5)' }}
          >
            <h3 style={{ marginBottom: '20px', color: '#334155', fontSize: '1.2rem', fontWeight: '600' }}>Focus Timer</h3>
            <div style={{ fontSize: '4.5rem', fontWeight: '800', fontFamily: 'monospace', color: '#8b5cf6', marginBottom: '30px', letterSpacing: '-2px' }}>
              {formatTime(timeLeft)}
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button onClick={toggleTimer} style={{ padding: '12px 30px', borderRadius: '30px', border: 'none', background: isActive ? '#ef4444' : '#10b981', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                {isActive ? <><Pause size={20} /> Pause</> : <><Play size={20} /> Start Focus</>}
              </button>
              <button onClick={resetTimer} style={{ padding: '12px', borderRadius: '50%', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer', color: '#64748b' }}>
                <RotateCcw size={24} />
              </button>
            </div>
          </motion.div>

          {/* Daily Stats Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', padding: '40px', borderRadius: '24px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)' }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '15px', fontWeight: '700' }}>"Consistency is key."</h3>
            <p style={{ opacity: 0.9, marginBottom: '30px', fontSize: '1.1rem' }}>You've maintained focus for <strong>4.5 hours</strong> today.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '15px', borderRadius: '16px', backdropFilter: 'blur(5px)' }}>
                <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 'bold' }}>12</span>
                <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>Tasks Completed</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '15px', borderRadius: '16px', backdropFilter: 'blur(5px)' }}>
                <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 'bold' }}>🔥 3</span>
                <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>Day Streak</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- LIVE ROOMS & RESOURCES GRID --- */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          {/* Left Column: Live Rooms */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#334155', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Video size={24} color="#ec4899" /> Live Study Rooms
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
              <RoomCard title="Lofi Beats & Code" users="1.2k" tags={["Music", "Focus"]} color="#4f46e5" />
              <RoomCard title="Late Night Math" users="340" tags={["Quiet", "Help"]} color="#059669" />
              <RoomCard title="Design Sprint" users="120" tags={["Collab", "Talk"]} color="#db2777" />
              <RoomCard title="Silent Reading" users="890" tags={["Silent", "Books"]} color="#f59e0b" />
            </div>
          </div>

          {/* Right Column: Resources */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#334155', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Book size={24} color="#f59e0b" /> Resources
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <ResourceItem title="React.js Guide" type="PDF Guide" downloads="12k" />
              <ResourceItem title="DS Cheat Sheet" type="Image" downloads="8.5k" />
              <ResourceItem title="UX Principles" type="Article" downloads="5k" />
              <ResourceItem title="System Design 101" type="PDF Guide" downloads="3.2k" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

// --- SUB COMPONENTS ---

const RoomCard = ({ title, users, tags, color }) => (
  <motion.div 
    whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
    style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(8px)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.5)', cursor: 'pointer', transition: 'all 0.2s' }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
      <div style={{ padding: '10px', background: `${color}15`, borderRadius: '12px', color: color }}>
        <Headphones size={20} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', color: '#64748b', fontWeight: '500' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
        {users}
      </div>
    </div>
    <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#1e293b' }}>{title}</h4>
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {tags.map((tag, i) => (
        <span key={i} style={{ fontSize: '0.75rem', padding: '4px 10px', borderRadius: '15px', background: '#f1f5f9', color: '#64748b', border: '1px solid #e2e8f0' }}>
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const ResourceItem = ({ title, type, downloads }) => (
  <motion.div 
    whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(5px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.5)', cursor: 'pointer' }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <div style={{ padding: '10px', background: '#fff7ed', borderRadius: '10px', color: '#ea580c' }}>
        <FileText size={20} />
      </div>
      <div>
        <h5 style={{ fontSize: '1rem', color: '#334155', margin: 0, marginBottom: '2px' }}>{title}</h5>
        <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{type}</span>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Users size={12} /> {downloads}
      </span>
    </div>
  </motion.div>
);

export default StudyversePage;