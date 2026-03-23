'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  speedX: number;
  speedY: number;
  type: 'star' | 'heart' | 'sparkle';
  rotation: number;
  rotationSpeed: number;
}

export default function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Particle[] = [];
    const particleCount = 150;

    const types: ('star' | 'heart' | 'sparkle')[] = ['star', 'star', 'star', 'heart', 'sparkle'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        type: types[Math.floor(Math.random() * types.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.z = ((particle.z + 1) % 1000);
        particle.rotation += particle.rotationSpeed;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        const scale = (1000 - particle.z) / 1000;
        const x = particle.x;
        const y = particle.y;
        const size = particle.size * scale * 2;
        const opacity = scale * 0.6;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(particle.rotation);

        if (particle.type === 'heart') {
          ctx.fillStyle = `rgba(255, 105, 180, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(0, size / 4);
          ctx.bezierCurveTo(-size, -size / 2, -size / 2, -size, 0, 0);
          ctx.bezierCurveTo(size / 2, -size, size, -size / 2, 0, size / 4);
          ctx.fill();
        } else if (particle.type === 'sparkle') {
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          for (let i = 0; i < 4; i++) {
            ctx.save();
            ctx.rotate((Math.PI / 4) * i);
            ctx.beginPath();
            ctx.moveTo(0, -size);
            ctx.lineTo(size / 4, 0);
            ctx.lineTo(0, size);
            ctx.lineTo(-size / 4, 0);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
          }
        } else {
          ctx.fillStyle = `rgba(212, 175, 55, ${opacity})`;
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, Math.PI * 2);
          ctx.fill();

          const glowSize = size * 2;
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, glowSize);
          gradient.addColorStop(0, `rgba(212, 175, 55, ${opacity * 0.3})`);
          gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(0, 0, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ backgroundColor: '#050505' }}
    />
  );
}
