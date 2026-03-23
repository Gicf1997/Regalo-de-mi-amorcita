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

    '\nHa pasado un mes desde que te di esa primera sorpresa. Treinta días que han sido como un parpadeo y una eternidad a la vez. Cada momento contigo confirma que elegí bien, que vos sos mi destino.',

    '\nEn este mes aprendí que el amor no es solo fuego como el de Natsu, es también la calma que encuentro cuando te veo sonreír. Es saber que incluso en mis peores días, pensarte me hace mejor persona.',

    '\nCada día que pasa, mi amor por vos crece exponencialmente. No es una función lineal, es una curva que tiende al infinito. Como Dirac entendió el universo cuántico, yo cada día entiendo mejor lo afortunado que soy de tenerte.',

    '\nUn mes es solo el comienzo de nuestra ecuación. Hay infinitos meses por delante, infinitas sonrisas, infinitos momentos. Y quiero vivirlos todos con vos.',

    '\nTe amo más hoy que hace un mes, y mañana te amaré más que hoy. Porque así funciona esto, mi amor: crece, evoluciona, se vuelve más fuerte.',

    '\nGracias por este mes perfecto. Por cada mensaje, cada risa, cada "te amo". Por ser mi Ali, mi reina, mi todo.',

    '\nCon todo el amor que crece cada día,\nTu Novio Gus\n\nP.D: Perdón por hacerte esperar esta sorpresa. Quería que fuera tan especial como vos.'
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
            Un Mes de Amor
          </h2>
          <p className="font-montserrat text-gray-400 text-sm">23 de Febrero - 23 de Marzo, 2026</p>
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 10 }}
          className="w-full max-w-xl bg-gradient-to-br from-pink-500/10 to-[#d4af37]/10 backdrop-blur-sm border border-pink-500/30 rounded-lg p-6 text-center space-y-2"
        >
          <p className="text-pink-300 font-cinzel text-lg font-semibold">
            30 días de amor
          </p>
          <p className="text-gray-400 font-montserrat text-sm">
            720 horas de pensarte
          </p>
          <p className="text-gray-400 font-montserrat text-sm">
            43,200 minutos de quererte
          </p>
          <p className="text-[#d4af37] font-montserrat text-sm font-semibold">
            ∞ razones para amarte
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 11 }}
          className="text-center text-gray-500 font-montserrat text-sm italic pb-8"
        >
         Hay quien dice &apos;mañana&apos; para no decidir, yo te digo &apos;ahora&apos; porque ya te elegí.
            Soy tu novio, tu amorcito, tu refugio y, sobre todo, tu hombre.
        </motion.p>
      </div>
    </motion.div>
  );
}
