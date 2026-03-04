'use client';

import { useEffect, useRef } from 'react';

export function AnimatedWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const waves = [
      {
        amplitude: 50,
        frequency: 0.01,
        speed: 0.02,
        color: 'rgba(59, 130, 246, 0.1)', // blue-500 with opacity
      },
      {
        amplitude: 40,
        frequency: 0.015,
        speed: 0.03,
        color: 'rgba(6, 182, 212, 0.1)', // cyan-500 with opacity
      },
      {
        amplitude: 60,
        frequency: 0.008,
        speed: 0.01,
        color: 'rgba(139, 92, 246, 0.1)', // violet-500 with opacity
      },
      {
        amplitude: 30,
        frequency: 0.02,
        speed: 0.025,
        color: 'rgba(236, 72, 153, 0.1)', // pink-500 with opacity
      },
    ];

    const drawWave = (
      ctx: CanvasRenderingContext2D,
      amplitude: number,
      frequency: number,
      speed: number,
      color: string,
      time: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x <= canvas.width; x++) {
        const y = 
          canvas.height / 2 + 
          Math.sin(x * frequency + time * speed) * amplitude +
          Math.sin(x * frequency * 2 + time * speed * 1.5) * (amplitude / 2) +
          Math.sin(x * frequency * 0.5 + time * speed * 0.5) * (amplitude * 1.5);
        
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();

      ctx.fillStyle = color;
      ctx.fill();
    };

    const animate = () => {
      ctx.fillStyle = 'rgb(17, 24, 39)'; // gray-900
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Apply blur effect
      ctx.filter = 'blur(40px)';

      waves.forEach((wave) => {
        drawWave(
          ctx,
          wave.amplitude,
          wave.frequency,
          wave.speed,
          wave.color,
          time
        );
      });

      // Reset filter for next frame
      ctx.filter = 'none';

      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10"
      style={{ background: 'rgb(17, 24, 39)' }}
    />
  );
}
