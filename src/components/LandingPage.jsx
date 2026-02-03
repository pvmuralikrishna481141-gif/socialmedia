import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { Globe, MessageCircle, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = () => { // 2. Remove props
  const navigate = useNavigate(); // 3. Initialize hook

  return (
    <div style={{ 
      height: '100vh', 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      overflow: 'hidden' 
    }}>
      {/* Updated Navbar */}
      <nav className="landing-navbar">
        <div className="nav-logo-text">
          Socially
        </div>
        
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button 
            className="btn nav-btn-link" 
            onClick={() => navigate('/login')} // 4. Update Click Handler
          >
            Login
          </button>
          
          <button 
            className="btn nav-btn-highlight" 
            style={{ padding: '8px 25px', borderRadius: '25px' }}
            onClick={() => navigate('/signup')} // 5. Update Click Handler
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '70px' }}>
        <header style={{ textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            style={{ fontSize: '3.5rem', marginBottom: '10px', lineHeight: '1.1' }}
          >
            Connect with the <span style={{ color: '#3274BB' }}>World</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ fontSize: '1.1rem', color: '#a3a3a3', maxWidth: '600px', marginBottom: '25px' }}
          >
            Join millions of people sharing their lives, creative ideas, and stories. Discover what's happening all over the world right now.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button 
              className="btn btn-primary" 
              style={{ padding: '12px 35px', fontSize: '1rem', backgroundColor: '#3274BB' }}
              onClick={() => navigate('/signup')} // 6. Update Click Handler
            >
              Get Started
            </button>
          </motion.div>
        </header>

        <section style={{ padding: '0 5% 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <FeatureCard icon={<Globe size={28} color="#3274BB" />} title="Global Community" desc="Connect with people worldwide." />
            <FeatureCard icon={<MessageCircle size={28} color="#a855f7" />} title="Real-time Chat" desc="Instant messaging with friends." />
            <FeatureCard icon={<Camera size={28} color="#f43f5e" />} title="Share Moments" desc="Post photos, videos, and stories." />
          </div>
        </section>
      </div>
    </div>
  );
};

// Feature Card (Kept Light Mode)
const FeatureCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    style={{ 
      backgroundColor: '#ffffff', 
      padding: '20px', 
      borderRadius: '12px', 
      border: '1px solid #e5e7eb',
      display: 'flex', 
      flexDirection: 'column', 
      gap: '10px', 
      alignItems: 'center', 
      textAlign: 'center',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)' 
    }}
  >
    <div style={{ 
      width: '45px', height: '45px', borderRadius: '50%', 
      background: 'rgba(50, 116, 187, 0.1)', 
      display: 'flex', alignItems: 'center', justifyContent: 'center' 
    }}>
      {icon}
    </div>
    <h3 style={{ fontSize: '1.1rem', color: '#1f2937' }}>{title}</h3>
    <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.4' }}>{desc}</p>
  </motion.div>
);

export default LandingPage;