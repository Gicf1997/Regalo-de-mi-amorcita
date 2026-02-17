'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MathGrapherProps {
  autoPlay?: boolean;
}

export default function MathGrapher({ autoPlay = false }: MathGrapherProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = 20;

    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
    ctx.lineWidth = 1;
    for (let i = -10; i <= 10; i++) {
      ctx.beginPath();
      ctx.moveTo(centerX + i * scale, 0);
      ctx.lineTo(centerX + i * scale, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, centerY + i * scale);
      ctx.lineTo(width, centerY + i * scale);
      ctx.stroke();
    }

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    const heartFunction = (t: number) => {
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      return { x, y };
    };

    ctx.strokeStyle = '#ff1493';
    ctx.fillStyle = 'rgba(255, 20, 147, 0.2)';
    ctx.lineWidth = 3;
    ctx.beginPath();

    const maxT = (Math.PI * 2 * phase) / 100;

    for (let t = 0; t <= maxT; t += 0.01) {
      const point = heartFunction(t);
      const x = centerX + point.x * scale;
      const y = centerY + point.y * scale;

      if (t === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.stroke();

    if (phase >= 100) {
      ctx.fill();
    }

    ctx.fillStyle = '#d4af37';
    ctx.font = 'italic 16px serif';
    ctx.fillText('x = 16sin³(t)', 20, 30);
    ctx.fillText('y = -13cos(t) + 5cos(2t) + 2cos(3t) + cos(4t)', 20, 50);

  }, [phase]);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setPhase(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <canvas
        ref={canvasRef}
        width={600}
        height={500}
        className="border-2 border-[#d4af37]/50 rounded-lg bg-black/80"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      {phase < 100 && autoPlay && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#d4af37] text-sm">
          Graficando... {phase}%
        </div>
      )}
      {phase >= 100 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-pink-400 text-lg font-cinzel"
        >
          Un corazón matemático para ti ❤️
        </motion.div>
      )}
    </motion.div>
  );
}
