'use client'

// components/TypingEffect.jsx
import { useState, useEffect } from 'react';

const TypingEffect = ({ 
  texts = [], // Array of texts to cycle through
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delayAfterType = 2000, 
  delayAfterDelete = 500,
  className = ""
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentFullText = texts[currentTextIndex];
    
    let timeout;
    
    if (isTyping && !isDeleting) {
      if (displayText === currentFullText) {
        // Finished typing, wait before deleting
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayAfterType);
      } else {
        // Continue typing
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        }, typingSpeed);
      }
    } else if (isDeleting) {
      if (displayText === '') {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setIsTyping(true);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        timeout = setTimeout(() => {}, delayAfterDelete);
      } else {
        // Continue deleting
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      }
    } else {
      // Start typing after initial delay
      timeout = setTimeout(() => {
        setIsTyping(true);
      }, delayAfterDelete);
    }
    
    return () => clearTimeout(timeout);
  }, [
    displayText, 
    currentTextIndex, 
    isTyping, 
    isDeleting, 
    texts,
    typingSpeed,
    deletingSpeed,
    delayAfterType,
    delayAfterDelete
  ]);

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-0.5 h-5 ml-1 bg-current animate-blink"></span>
    </span>
  );
};

export default TypingEffect;