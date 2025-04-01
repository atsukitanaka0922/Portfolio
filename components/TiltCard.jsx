'use client'

// components/TiltCard.jsx
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TiltCard = ({ children, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current || !isHovered) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation (max 10 degrees)
    const rotateY = (mouseX / (rect.width / 2)) * 10;
    const rotateX = -(mouseY / (rect.height / 2)) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
    
    // Calculate shine position
    const shineX = (mouseX / rect.width) * 100 + 50;
    const shineY = (mouseY / rect.height) * 100 + 50;
    setPosition({ x: shineX, y: shineY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 20, 
          mass: 0.5 
        }
      }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
      
      {/* Shine effect */}
      {isHovered && (
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 60%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;