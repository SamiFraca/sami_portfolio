"use client";

import { useEffect, useRef } from 'react';

export const AnimatedWaves = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Adjusted parameters: Different vertical positions and phases for organic interspersed effect
    const waves = [
      { yOffset: -150, amplitude: 90, frequency: 0.001, speed: 0.3, verticalSpeed: 0.4, phase: 0, color: 'rgba(168, 85, 247, 0.8)' },     // Purple - top
      { yOffset: 150, amplitude: 100, frequency: 0.0003, speed: 0.2, verticalSpeed: 0.3, phase: Math.PI, color: 'rgba(45, 212, 191, 0.8)' }, // Cyan - bottom
      { yOffset: -50, amplitude: 80, frequency: 0.0008, speed: 0.4, verticalSpeed: 0.5, phase: Math.PI/2, color: 'rgba(59, 130, 246, 0.8)' },  // Blue - middle-top
      { yOffset: 50, amplitude: 110, frequency: 0.0005, speed: 0.25, verticalSpeed: 0.35, phase: Math.PI*1.5, color: 'rgba(217, 70, 239, 0.7)' } // Pink/Fuchsia - middle-bottom
    ];

    // Slowed down the global time increment for a dreamier feel
    let time = 0;

    const animate = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Increased blur slightly to blend the colors more seamlessly
      ctx.filter = 'blur(30px)';
      ctx.lineCap = 'round';
      
      const lineWidth = Math.max(canvas.width, canvas.height) * 0.05;

      waves.forEach(wave => {
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = wave.color;

        // This adds a slow up-and-down drift to the entire wave line
        const verticalDrift = Math.sin(time * wave.verticalSpeed) * 40; 

        for (let x = 0; x <= canvas.width; x += 10) {
          // Combined the vertical drift with phase offset and horizontal movement
          const y = (canvas.height / 2) + wave.yOffset + verticalDrift + 
                    Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * wave.amplitude +
                    Math.sin(x * wave.frequency * 2 + time * wave.speed * 0.5 + wave.phase) * (wave.amplitude * 0.3); // Added secondary wave for more organic feel
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      ctx.filter = 'none';

      time += 0.005; // Halved from previous version to slow everything down
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '70vh',
        zIndex: -1, 
        pointerEvents: 'none', 
        backgroundColor: '#000'
      }}
    />
  );
};

