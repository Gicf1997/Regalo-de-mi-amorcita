'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import CharacterSprite from '../CharacterSprite';
import { ChevronRight, BookOpen } from 'lucide-react';

interface Stage1RavenclawProps {
  onNext: () => void;
}

export default function Stage1Ravenclaw({ onNext }: Stage1RavenclawProps) {
  const [textPhase, setTextPhase] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showResult, setShowResult] = useState(false);

  const texts = [
    'Hmm... una mente que domina ecuaciones...',
    
    'Detectando pasión por los números y las coordenadas...',

    'Un piano resuena en tu alma, arte y lógica en armonía...',

    'Hmm... una estratega nata, siempre un paso adelante en el ajedrez de la vida...',

    'Inteligente, elocuente, hermosa por dentro y por fuera...',

    'Difícil... muy difícil decisión.',
    'Veo talento, y una clara visión.',

    'Hay bondad, sí, pero no es lo que te guía',
    'es la sed de saber lo que en ti confía.',
    'No te asustan los retos de la mente',
    'descifras enigmas, eres diferente.',
    'Tu espada es la lógica, tu escudo el saber',
    'en los libros y estrellas está tu poder.',

    'Para aquellos con mente aguda y sagaz',
    'que encuentran en la duda su propia paz',
    'he tomado mi decisión, y la ley no cambio:',

    '¡TU CAMINO ES RAVENCLAW!'
  ];

  useEffect(() => {
    if (textPhase < texts.length) {
      const text = texts[textPhase];
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            if (textPhase < texts.length - 1) {
              setTextPhase(textPhase + 1);
            } else {
              setTimeout(() => setShowResult(true), 600);
            }
          }, 400);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [textPhase]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 py-12"
    >
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-lg flex flex-col items-center gap-8"
          >
            <CharacterSprite character="sorting-hat" />

            <div className="w-full bg-black/60 backdrop-blur-md border-2 border-[#d4af37]/30 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <BookOpen className="w-6 h-6 text-[#d4af37]" />
                <h2 className="font-cinzel text-2xl md:text-3xl text-[#d4af37]">
                  El Sombrero Habla...
                </h2>
              </div>
              <div className="text-center min-h-[48px]">
                <p className="text-xl md:text-2xl text-white font-montserrat">
                  {displayedText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="text-[#d4af37]"
                  >
                    |
                  </motion.span>
                </p>
              </div>
              <div className="mt-6 flex justify-center gap-1">
                {texts.map((_, i) => (
                  <motion.div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i <= textPhase ? 'bg-[#d4af37] w-8' : 'bg-gray-600 w-4'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="flex flex-col items-center gap-8 w-full max-w-lg"
          >
            <motion.div
              className="relative"
              animate={{
                filter: [
                  'drop-shadow(0 0 20px rgba(59,130,246,0.4))',
                  'drop-shadow(0 0 40px rgba(59,130,246,0.8))',
                  'drop-shadow(0 0 20px rgba(59,130,246,0.4))'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-b from-blue-700/50 to-blue-900/30 border-2 border-blue-400/60 flex items-center justify-center">
                <span className="text-6xl md:text-7xl">&#x1F985;</span>
              </div>
            </motion.div>

            <div className="text-center">
              <motion.h2
                className="font-cinzel text-5xl md:text-7xl font-bold text-blue-300 mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ textShadow: '0 0 30px rgba(59,130,246,0.6)' }}
              >
                RAVENCLAW
              </motion.h2>
              <p className="text-xl text-blue-200/80 font-montserrat mb-2">
                Inteligencia &middot; Creatividad &middot; Sabiduría
              </p>
              <p className="text-gray-400 font-montserrat text-sm max-w-md mx-auto leading-relaxed">
                &ldquo;O quizás a Ravenclaw, donde habitan los inteligentes,
                aquellos de mente ágil siempre aprenderán con los de su clase.&rdquo;
              </p>
              <p className="text-blue-300/60 font-montserrat text-xs mt-3 italic">
                Sabiduría, creatividad, ingenio... todo lo que eres y más, mi amor.
              </p>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              onClick={onNext}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] border border-blue-400/50"
            >
              <div className="flex items-center gap-3">
                <span className="font-cinzel text-lg font-semibold text-white">
                  Aceptar Destino
                </span>
                <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
