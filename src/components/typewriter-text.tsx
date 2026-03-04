'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export function TypewriterText({ 
  text, 
  speed = 100, 
  deleteSpeed = 50,
  pauseTime = 2000,
  className 
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (isPaused) {
        const timeout = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseTime);
        return () => clearTimeout(timeout);
      }

      if (isDeleting) {
        if (displayedText.length > 0) {
          const timeout = setTimeout(() => {
            setDisplayedText(prev => prev.slice(0, -1));
          }, deleteSpeed);
          return () => clearTimeout(timeout);
        } else {
          setIsDeleting(false);
          setCurrentIndex(0);
        }
      } else {
        if (currentIndex < text.length) {
          const timeout = setTimeout(() => {
            setDisplayedText(prev => prev + text[currentIndex]);
            setCurrentIndex(prev => prev + 1);
          }, speed);
          return () => clearTimeout(timeout);
        } else {
          setIsPaused(true);
        }
      }
    };

    handleTyping();
  }, [currentIndex, text, speed, isDeleting, displayedText, deleteSpeed, pauseTime, isPaused]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
