'use client';

import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Heart, Sparkles, Flower2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FallingItem {
  id: number;
  x: number;
  type: 'heart' | 'flower' | 'sparkle';
  speed: number;
}

interface HeartCatcherGameProps {
  onComplete: () => void;
  targetScore?: number;
}

export default function HeartCatcherGame({ onComplete, targetScore = 30 }: HeartCatcherGameProps) {
  const [score, setScore] = useState(0);
  const [playerX, setPlayerX] = useState(50);
  const [fallingItems, setFallingItems] = useState<FallingItem[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [itemIdCounter, setItemIdCounter] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setPlayerX(Math.max(5, Math.min(95, x)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    setPlayerX(Math.max(5, Math.min(95, x)));
  };

  const spawnItem = useCallback(() => {
    const types: ('heart' | 'flower' | 'sparkle')[] = ['heart', 'heart', 'heart', 'flower', 'sparkle'];
    const randomType = types[Math.floor(Math.random() * types.length)];

    const newItem: FallingItem = {
      id: itemIdCounter,
      x: Math.random() * 90 + 5,
      type: randomType,
      speed: Math.random() * 2 + 3,
    };

    setItemIdCounter(prev => prev + 1);
    setFallingItems(prev => [...prev, newItem]);
  }, [itemIdCounter]);

  useEffect(() => {
    if (!gameStarted) return;

    const spawnInterval = setInterval(spawnItem, 800);
    return () => clearInterval(spawnInterval);
  }, [gameStarted, spawnItem]);

  useEffect(() => {
    if (!gameStarted) return;

    const gameLoop = setInterval(() => {
      setFallingItems(prev => {
        const updated = prev.filter(item => {
          const itemBottom = 85;
          const playerTop = 80;
          const horizontalDistance = Math.abs(item.x - playerX);

          if (horizontalDistance < 8 && itemBottom >= playerTop) {
            const points = item.type === 'heart' ? 1 : item.type === 'flower' ? 2 : 3;
            setScore(s => s + points);

            confetti({
              particleCount: item.type === 'sparkle' ? 30 : 15,
              spread: 60,
              origin: { x: item.x / 100, y: 0.8 },
              colors: item.type === 'heart' ? ['#ff69b4', '#ff1493'] :
                      item.type === 'flower' ? ['#d4af37', '#ffd700'] :
                      ['#ffffff', '#e0e0e0']
            });

            return false;
          }

          return itemBottom < 95;
        });

        return updated;
      });
    }, 50);

    return () => clearInterval(gameLoop);
  }, [gameStarted, playerX]);

  useEffect(() => {
    if (score >= targetScore) {
      setTimeout(() => {
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.5 },
          colors: ['#d4af37', '#ff69b4', '#ff1493', '#ffd700']
        });
        onComplete();
      }, 500);
    }
  }, [score, targetScore, onComplete]);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setFallingItems([]);
  };

  if (!gameStarted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center h-full"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Heart className="w-24 h-24 text-pink-500 fill-pink-500 mb-6" />
        </motion.div>

        <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-[#d4af37] mb-4 text-center">
          Atrapa Mi Amor
        </h3>

        <p className="font-montserrat text-gray-300 text-center mb-2 max-w-md px-4">
          Mueve tu dedo o mouse para atrapar corazones
        </p>

        <div className="bg-black/40 backdrop-blur-sm border border-[#d4af37]/30 rounded-lg p-4 mb-6 max-w-sm">
          <div className="flex items-center justify-between gap-4 text-sm font-montserrat">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
              <span className="text-gray-300">+1 punto</span>
            </div>
            <div className="flex items-center gap-2">
              <Flower2 className="w-5 h-5 text-[#d4af37]" />
              <span className="text-gray-300">+2 puntos</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-gray-300">+3 puntos</span>
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={startGame}
          className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-pink-500 rounded-lg font-cinzel font-semibold text-black text-lg shadow-lg hover:shadow-[#d4af37]/50 transition-all"
        >
          ¡Comenzar!
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div
      className="relative w-full h-full overflow-hidden select-none touch-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-gradient-to-r from-[#d4af37]/90 to-pink-500/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
        >
          <p className="font-cinzel text-2xl font-bold text-black">
            {score} / {targetScore}
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-0">
        {fallingItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: -50, x: `${item.x}%`, rotate: 0 }}
            animate={{
              y: '100vh',
              rotate: 360,
              transition: {
                duration: item.speed,
                ease: 'linear',
              }
            }}
            className="absolute"
          >
            {item.type === 'heart' && (
              <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
            )}
            {item.type === 'flower' && (
              <Flower2 className="w-8 h-8 text-[#d4af37]" />
            )}
            {item.type === 'sparkle' && (
              <Sparkles className="w-8 h-8 text-white" />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={{ x: `${playerX}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="absolute bottom-[10%] -translate-x-1/2"
        style={{ left: 0 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="relative"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-pink-500 rounded-full shadow-lg shadow-[#d4af37]/50 flex items-center justify-center">
            <Heart className="w-8 h-8 text-black fill-black" />
          </div>

          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-pink-500 rounded-full"
          />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <p className="font-montserrat text-gray-400 text-sm">
          Mueve para atrapar
        </p>
      </div>
    </div>
  );
}
