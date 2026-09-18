import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="splash-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        // Purple to Pink Gradient matching your screenshot
        background: 'linear-gradient(135deg, #c084fc 0%, #ec4899 100%)', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        overflow: 'hidden'
      }}
    >
      {/* Decorative Background Circles (Faint white circles) */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        filter: 'blur(40px)',
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        filter: 'blur(30px)',
      }} />

      {/* Main Logo Text */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          fontSize: '5rem', // Large and bold
          fontWeight: '800',
          color: '#ffffff', // White text
          marginBottom: '20px',
          letterSpacing: '-2px',
          textShadow: '0 4px 10px rgba(0,0,0,0.1)',
          zIndex: 10
        }}
      >
        Socially
      </motion.h1>
      
      {/* Loading Indicator (3 Dots) */}
      <motion.div 
        style={{ display: 'flex', gap: '10px', zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -10, 0], // Bounce animation
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#ffffff'
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;