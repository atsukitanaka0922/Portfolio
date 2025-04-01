'use client'

// components/CursorEffect.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Check if it's in dark mode
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check for dark mode in HTML class or localStorage
      const isDark = document.documentElement.classList.contains('dark') || 
                     localStorage.getItem('theme') === 'dark';
      setIsDarkMode(isDark);
      
      // Listen for theme changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
          }
        });
      });
      
      observer.observe(document.documentElement, { attributes: true });
      
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Reset isMoving after some delay to fade out cursor when not moving
      clearTimeout(window.mouseMoveTimeout);
      window.mouseMoveTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 500);
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearTimeout(window.mouseMoveTimeout);
    };
  }, []);

  // Create multiple cursor particles for trail effect
  const cursorElements = [];
  const numCursors = 8;
  
  for (let i = 0; i < numCursors; i++) {
    // Delay and size decrease for trailing particles
    const delay = i * 0.02;
    const size = Math.max(6 - i, 1);
    
    cursorElements.push(
      <motion.div
        key={i}
        className="cursor-trail fixed pointer-events-none z-50 rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: 'rgba(59, 130, 246, 0.7)',
        }}
        animate={{
          x: mousePosition.x - size / 2,
          y: mousePosition.y - size / 2,
          opacity: isMoving ? 0.8 - (i * 0.1) : 0,
        }}
        transition={{
          duration: 0.2,
          delay: delay,
          ease: "linear"
        }}
      />
    );
  }

  // Add a main cursor
  cursorElements.push(
    <motion.div
      key="main-cursor"
      className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
      style={{
        width: '20px',
        height: '20px',
        backgroundColor: '#fff',
      }}
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
        scale: isMoving ? 1 : 1.5,
      }}
      transition={{
        duration: 0.15,
        ease: "linear"
      }}
    />
  );

  return <>{cursorElements}</>;
};

export default CursorEffect;