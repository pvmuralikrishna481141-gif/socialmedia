import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate('/home'); 
    }, 500);
  };

  // --- ANIMATION VARIANTS ---
  // 1. Parent Container (Controls the timing)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child item appearing
        delayChildren: 0.2,    // Initial wait before starting
      }
    }
  };

  // 2. Child Items (The actual sliding animation)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="login-container">
      
      {/* --- LEFT SIDE: FORM (Staggered Animation) --- */}
      <motion.div 
        className="login-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="form-wrapper">
          
          {/* Item 1: Title */}
          <motion.div variants={itemVariants}>
            <h1 className="brand-title">Socially</h1>
            <h2 className="welcome-text">Welcome back! Please enter your details.</h2>
          </motion.div>

          <form onSubmit={handleLogin}>
            
            {/* Item 2: Email Input */}
            <motion.div className="input-group" variants={itemVariants}>
              <label>Email</label>
              <motion.input 
                whileFocus={{ scale: 1.01, borderColor: "#a855f7" }}
                type="email" 
                placeholder="Enter your email" 
                className="form-input" 
                required 
              />
            </motion.div>

            {/* Item 3: Password Input */}
            <motion.div className="input-group" variants={itemVariants}>
              <label>Password</label>
              <div className="password-wrapper">
                <motion.input 
                  whileFocus={{ scale: 1.01, borderColor: "#a855f7" }}
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className="form-input" 
                  required
                />
                <button 
                  type="button" 
                  className="eye-btn" 
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                </button>
              </div>
            </motion.div>

            {/* Item 4: Checkbox */}
            <motion.div className="remember-me" variants={itemVariants}>
              <input type="checkbox" id="remember" style={{ cursor: 'pointer' }} />
              <label htmlFor="remember" style={{ cursor: 'pointer' }}>Remember me</label>
            </motion.div>

            {/* Item 5: Login Button */}
            <motion.button 
              type="submit" 
              className="btn-login"
              variants={itemVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Log In
            </motion.button>
          </form>

          {/* Item 6: Signup Link */}
          <motion.p className="signup-link" variants={itemVariants}>
            Don't have an account? 
            <motion.span 
              onClick={() => navigate('/signup')}
              whileHover={{ scale: 1.05, color: "#d946ef" }}
              style={{ display: 'inline-block', marginLeft: '8px' }}
            >
              Sign up
            </motion.span>
          </motion.p>
        </div>
      </motion.div>

      {/* --- RIGHT SIDE: GRADIENT (Simple Fade In) --- */}
      <motion.div 
        className="login-right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <div className="overlay-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Connect with the world.
          </motion.h1>
          
          <p className="subtitle">Join the conversation now.</p>

          <div className="feature-cards">
            <FeatureRow text="Connect with friends" delay={0.7} />
            <FeatureRow text="Share your moments" delay={0.8} />
            <FeatureRow text="Discover new trends" delay={0.9} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const FeatureRow = ({ text, delay }) => (
  <motion.div 
    className="feature-row"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: delay, duration: 0.5 }}
    whileHover={{ scale: 1.05, x: 10, backgroundColor: "rgba(255,255,255,0.2)" }}
  >
    <div className="feature-icon">
      <CheckCircle size={20} color="white" />
    </div>
    <div className="feature-text">
      <h4>{text}</h4>
    </div>
  </motion.div>
);

export default LoginPage;