import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { Eye, EyeOff } from 'lucide-react';
import { createUser } from '../services/userService';

const SignupPage = () => { // 2. Remove props
  const navigate = useNavigate(); // 3. Initialize Hook
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form state, wired up to the backend
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle Registration Logic
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);
    try {
      // The "name" field sent to the backend combines full name + username
      // since the current User model only stores name/email/password.
      await createUser({ name: `${name} (@${username})`, email, password });

      alert('Account created successfully');
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
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
              <input
                type="text"
                placeholder="Enter your Name"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter username"
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Name@example.com"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Create a password" 
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength={6}
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

          {error && (
            <p style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '10px' }}>{error}</p>
          )}

          <button type="submit" className="btn-signup" disabled={loading}>
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
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