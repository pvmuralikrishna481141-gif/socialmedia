import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

const SignupPage = () => { // 2. Remove props
  const navigate = useNavigate(); // 3. Initialize Hook
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Function to handle Registration Logic
  const handleRegister = (e) => {
    e.preventDefault(); // Prevent page reload
    
    // 1. Show the alert
    alert("Account created successfully");
    
    // 2. Redirect to Login Page using Router
    navigate('/login'); 
  };

  return (
    <div className="signup-container">
      <motion.div 
        className="signup-card"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Join Socially and start your journey</p>

        {/* Bind the submit to handleRegister */}
        <form className="signup-form" onSubmit={handleRegister}>
          
          <div className="form-row">
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your Name" className="form-input" required />
            </div>
            <div className="input-group">
              <label>Username</label>
              <input type="text" placeholder="Enter username" className="form-input" required />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Name@example.com" className="form-input" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Create a password" 
                className="form-input"
                required
              />
              <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <div className="password-wrapper">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="Confirm your password" 
                className="form-input"
                required
              />
              <button type="button" className="eye-btn" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <span className="link-text">Terms of Service</span> and <span className="link-text">Privacy Policy</span>
            </label>
          </div>

          <button type="submit" className="btn-signup">Create Account</button>
        </form>

        {/* FIXED: "Sign in" link using navigate */}
        <p className="login-redirect">
          Already have an account? 
          <span 
            onClick={() => navigate('/login')} 
            style={{ cursor: 'pointer', color: '#1d9bf0', fontWeight: 'bold', marginLeft: '5px' }}
          >
            Sign in
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupPage;