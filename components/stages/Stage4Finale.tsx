'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CharacterSprite from '../CharacterSprite';
import { Heart, Music, Play, Pause } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Stage4FinaleProps {
  onNext?: () => void;
}

export default function Stage4Finale({ onNext }: Stage4FinaleProps) {
  const [currentSong, setCurrentSong] = useState<string | null>(null);

  useEffect(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#d4af37', '#ffd700', '#ff69b4', '#ff1493']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#d4af37', '#ffd700', '#ff69b4', '#ff1493']
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const letterParts = [
    'Mi Ali,',

    '\nSé que para vos las fechas y los detalles importan. Por eso necesito que sepas: recuerdo cada uno.',

    '\nComo Natsu usa el fuego para proteger y luchar por sus amigos, yo quiero protegerte con cada detalle que recuerdo, con cada esfuerzo que hago para ser mejor para vos.',

    '\nComo las partículas entrelazadas de Dirac, lo que te pase a vos lo siento yo. Sin importar la distancia. Como la identidad de Euler une cinco mundos en una verdad, vos unís todo lo que soy en algo que tiene sentido.',

    '\nTe amo más que un Googolplex, más que todos los números que el universo puede contener, más que todas las estrellas doradas que flotan en el cielo.',

    '\nCon todo el amor de mi alma,\nTu Novio Gus'
  ];

  function toggleSong(song: string) {
    setCurrentSong(prev => prev === song ? null : song);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center min-h-screen px-4 py-12 overflow-y-auto"
    >
      <div className="w-full max-w-2xl flex flex-col items-center gap-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <Heart className="w-16 h-16 md:w-20 md:h-20 text-pink-500 fill-pink-500" />
          </motion.div>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-[#d4af37] text-center">
            Para Mi Reina
          </h2>
          <CharacterSprite character="happy" />
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full bg-gradient-to-br from-black/80 to-[#d4af37]/5 backdrop-blur-xl border-2 border-[#d4af37]/40 rounded-lg p-6 md:p-8 shadow-[0_0_40px_rgba(212,175,55,0.2)]"
        >
          <div className="space-y-0">
            {letterParts.map((part, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.5 }}
                className={`whitespace-pre-line font-montserrat leading-relaxed ${
                  i === 0
                    ? 'text-[#d4af37] text-xl font-cinzel font-semibold'
                    : i === letterParts.length - 1
                    ? 'text-[#d4af37] italic font-semibold mt-4'
                    : i === letterParts.length - 2
                    ? 'text-pink-300 font-semibold'
                    : 'text-gray-300'
                }`}
              >
                {part}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 6.5 }}
          className="w-full bg-black/60 backdrop-blur-md border border-green-500/40 rounded-lg p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <Music className="w-4 h-4 text-black" />
            </div>
            <h3 className="font-cinzel text-lg text-green-400">
              Nuestra Playlist
            </h3>
          </div>
          <div className="space-y-2">
            {[
              { id: 'yiruma', title: 'River Flows in You', artist: 'Yiruma' },
              { id: 'eres', title: 'Eres', artist: 'Cafe Tacvba' },
              { id: 'noteimaginas', title: 'No te imaginas', artist: 'Yuridia' }
            ].map(song => (
              <motion.button
                key={song.id}
                onClick={() => toggleSong(song.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  currentSong === song.id
                    ? 'bg-green-600/80 shadow-[0_0_16px_rgba(34,197,94,0.4)]'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  currentSong === song.id ? 'bg-white/20' : 'bg-green-500/20'
                }`}>
                  {currentSong === song.id ? (
                    <Pause className="w-4 h-4 text-white" />
                  ) : (
                    <Play className="w-4 h-4 text-green-400" />
                  )}
                </div>
                <div className="flex-1 text-left">
                  <p className="text-white text-sm font-semibold">{song.title}</p>
                  <p className="text-gray-400 text-xs">{song.artist}</p>
                </div>
                {currentSong === song.id && (
                  <div className="flex items-end gap-[2px] h-4">
                    {[0, 1, 2, 3].map(i => (
                      <motion.div
                        key={i}
                        className="w-[3px] bg-white rounded-full"
                        animate={{ height: ['4px', '16px', '8px', '14px', '4px'] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 8 }}
          className="text-center text-gray-500 font-montserrat text-sm italic pb-8"
        >
          Con amor infinito, para siempre tuyo. &mdash; Tu Dragón
        </motion.p>
      </div>
    </motion.div>
  );
}
