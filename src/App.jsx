import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// --- COMPONENT IMPORTS ------
import SplashScreen from './components/SplashScreen';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage';
import ChatPage from './components/ChatPage';
import ExplorePage from './components/ExplorePage';
import ProfilePage from './components/ProfilePage';
import NotificationPage from './components/NotificationPage';
import StudyversePage from './components/StudyversePage';

function App() {
  // --- STATE MANAGEMENT ---
  const [theme, setTheme] = useState('light');
  
  // 1. GLOBAL LOADING STATE (Starts true on every reload)
  const [isLoading, setIsLoading] = useState(true);
  
  // Dummy Current User Data
  const currentUser = { name: "User Name", initials: "UN" }; 

  // Toggle Light/Dark Theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Apply theme to HTML body
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Logout Handler
  const handleLogout = () => {
    window.location.href = '/landing';
  };

  return (
    <Router>
      {/* 2. CONDITIONAL RENDERING: Show Splash first, then Content */}
      {isLoading ? (
        <SplashScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <Routes>
          {/* --- PUBLIC ROUTES --- */}
          {/* Redirect root to landing since Splash is handled globally now */}
          <Route path="/" element={<Navigate to="/landing" replace />} />
          
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* --- AUTHENTICATED ROUTES --- */}
          
          {/* 1. HOME FEED */}
          <Route 
            path="/home" 
            element={
              <HomePage 
                theme={theme} 
                toggleTheme={toggleTheme} 
                user={currentUser} 
                onLogout={handleLogout}
              />
            } 
          />

          {/* 2. CHAT */}
          <Route 
            path="/chat" 
            element={<ChatPage user={currentUser} onLogout={handleLogout} />} 
          />
          <Route 
            path="/chat/:contactId" 
            element={<ChatPage user={currentUser} onLogout={handleLogout} />} 
          />

          {/* 3. EXPLORE */}
          <Route 
            path="/explore" 
            element={<ExplorePage onLogout={handleLogout} user={currentUser} />} 
          />

          {/* 4. PROFILE */}
          <Route 
            path="/profile" 
            element={<ProfilePage onLogout={handleLogout} user={currentUser} />} 
          />

          {/* 5. NOTIFICATIONS */}
          <Route 
            path="/notifications" 
            element={<NotificationPage onLogout={handleLogout} user={currentUser} />} 
          />

          {/* 6. STUDYVERSE */}
          <Route 
            path="/studyverse" 
            element={<StudyversePage onLogout={handleLogout} user={currentUser} />} 
          />

          {/* --- CATCH ALL --- */}
          {/* Redirects unknown routes to Landing */}
          <Route path="*" element={<Navigate to="/landing" />} />
          
        </Routes>
      )}
    </Router>
  );
}

export default App;