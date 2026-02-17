'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import CharacterSprite from '../CharacterSprite';
import MathGrapher from '../MathGrapher';
import { Flame, Unlock, Heart, Atom, Infinity as InfinityIcon, Music } from 'lucide-react';
import { EulerIdentity, PianoFibonacci, DiracBuildup, GoogolplexVisual } from './stage3-components';
import Image from 'next/image';

interface Stage3MathProps {
  onNext: () => void;
}

type Phase =
  | 'heart'
  | 'euler'
  | 'piano-fibonacci'
  | 'dirac-intro'
  | 'dirac-build'
  | 'dirac-reveal'
  | 'googolplex'
  | 'done';

export default function Stage3Math({ onNext }: Stage3MathProps) {
  const [phase, setPhase] = useState<Phase>('heart');
  const [answer, setAnswer] = useState('');
  const [showError, setShowError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const normalized = answer.toLowerCase().trim();

    if (['gogolplex', 'googolplex', 'gúgolplex', 'googleplex'].includes(normalized)) {
      setPhase('done');
      setTimeout(() => onNext(), 3000);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center min-h-screen px-4 py-12 overflow-y-auto"
    >
      <div className="w-full max-w-2xl flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <CharacterSprite character="natsu" />
          <div className="text-left">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#d4af37]">
              El Enigma del Dragón
            </h2>
            <p className="text-sm text-gray-400 font-montserrat">
              Matemáticas, Física y Amor
            </p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {phase === 'heart' && (
            <motion.div
              key="heart"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full bg-black/60 backdrop-blur-md border-2 border-pink-500/40 rounded-lg p-6"
            >
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Heart className="w-6 h-6 text-pink-400" />
                  <h3 className="font-cinzel text-xl md:text-2xl text-pink-400">
                    Un Regalo Matemático
                  </h3>
                </div>
                <p className="text-gray-300 font-montserrat text-sm leading-relaxed">
                  Para una Licenciada en Matemáticas, el amor se expresa en ecuaciones paramétricas.
                </p>
              </div>

              <div className="flex justify-center mb-6">
                <MathGrapher autoPlay={true} />
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
                onClick={() => setPhase('euler')}
                className="mx-auto flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-800 rounded-lg hover:scale-105 transition-transform border border-pink-400/50"
              >
                <span className="font-cinzel text-base text-white">Continuar</span>
              </motion.button>
            </motion.div>
          )}

          {phase === 'euler' && (
            <motion.div
              key="euler"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full bg-black/60 backdrop-blur-md border-2 border-emerald-500/40 rounded-lg p-6"
            >
              <EulerIdentity onComplete={() => setPhase('piano-fibonacci')} />
            </motion.div>
          )}

          {phase === 'piano-fibonacci' && (
            <motion.div
              key="piano-fibonacci"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full bg-black/60 backdrop-blur-md border-2 border-[#d4af37]/40 rounded-lg p-6"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Music className="w-5 h-5 text-[#d4af37]" />
                <span className="font-cinzel text-sm text-[#d4af37]">Para ti, pianista</span>
              </div>
              <PianoFibonacci onComplete={() => setPhase('dirac-intro')} />
            </motion.div>
          )}

          {phase === 'dirac-intro' && (
            <motion.div
              key="dirac-intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full bg-black/60 backdrop-blur-md border-2 border-orange-500/40 rounded-lg p-6"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Atom className="w-6 h-6 text-orange-400" />
                <h3 className="font-cinzel text-xl md:text-2xl text-orange-400">
                  La Física del Amor
                </h3>
              </div>

              <div className="space-y-4 text-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-300 font-montserrat leading-relaxed"
                >
                  En 1928, Paul Dirac escribió una ecuación que unificó
                  la mecánica cuántica con la relatividad especial.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-gray-300 font-montserrat leading-relaxed"
                >
                  Predijo la existencia de la antimateria antes de que fuera descubierta.
                  Demostró que cada partícula tiene una compañera inseparable.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.1 }}
                  className="text-orange-300 font-montserrat leading-relaxed font-semibold"
                >
                  Dos partículas entrelazadas permanecen conectadas sin importar
                  la distancia que las separe. Si una cambia, la otra lo siente instantáneamente.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                  className="text-gray-500 font-montserrat text-sm italic"
                >
                  Como vos y yo.
                </motion.p>
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
                onClick={() => setPhase('dirac-build')}
                className="mx-auto mt-6 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-800 rounded-lg hover:scale-105 transition-transform border border-orange-400/50"
              >
                <span className="font-cinzel text-base text-white">Ver la Ecuación</span>
              </motion.button>
            </motion.div>
          )}

          {phase === 'dirac-build' && (
            <motion.div
              key="dirac-build"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full bg-black/60 backdrop-blur-md border-2 border-orange-500/40 rounded-lg p-6"
            >
              <DiracBuildup onComplete={() => setPhase('dirac-reveal')} />
            </motion.div>
          )}

          {phase === 'dirac-reveal' && (
            <motion.div
              key="dirac-reveal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', stiffness: 80 }}
              className="w-full bg-black/60 backdrop-blur-md border-2 border-orange-500/40 rounded-lg p-8"
            >
              <div className="text-center space-y-6">
                <motion.div
                  animate={{
                    filter: [
                      'drop-shadow(0 0 10px rgba(234,88,12,0.3))',
                      'drop-shadow(0 0 40px rgba(234,88,12,0.7))',
                      'drop-shadow(0 0 10px rgba(234,88,12,0.3))'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="flex flex-col items-center"
                >
                  <Image
                    src="/sprites/dirac-equation.jpg"
                    alt="Ecuación de Dirac"
                    width={500}
                    height={300}
                    className="w-full max-w-md h-auto mb-2"
                    priority
                  />
                  <p className="font-cinzel text-lg text-orange-400">
                    La Ecuación de Dirac
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-gray-300 font-montserrat leading-relaxed max-w-md mx-auto"
                >
                  Cuando se combinan, estas piezas describen cómo dos partículas
                  quedan entrelazadas para siempre. Lo que le pasa a una,
                  lo siente la otra. Sin importar la distancia.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-orange-300 font-montserrat italic"
                >
                  Así están nuestras almas: entrelazadas en el tejido del espacio-tiempo.
                </motion.p>
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                onClick={() => setPhase('googolplex')}
                className="mx-auto mt-6 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-800 rounded-lg hover:scale-105 transition-transform border border-orange-400/50"
              >
                <InfinityIcon className="w-5 h-5 text-white" />
                <span className="font-cinzel text-base text-white">Último Desafío</span>
              </motion.button>
            </motion.div>
          )}

          {phase === 'googolplex' && (
            <motion.div
              key="googolplex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full bg-black/60 backdrop-blur-md border-2 border-orange-500/40 rounded-lg p-6"
            >
              <GoogolplexVisual />

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <label className="block text-center">
                  <span className="text-lg text-orange-300 font-montserrat block mb-3">
                    ¿Cómo se llama ese número imposible?
                  </span>
                  <motion.input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Escribe su nombre..."
                    className="w-full max-w-sm mx-auto block px-5 py-3 bg-black/50 border-2 border-orange-500/40 rounded-lg text-white text-center text-lg font-montserrat focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-500/50"
                    animate={showError ? { x: [-8, 8, -8, 8, 0] } : {}}
                    transition={{ duration: 0.4 }}
                  />
                </label>

                <motion.button
                  type="submit"
                  className="mx-auto flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg hover:scale-105 transition-transform border border-orange-400/50"
                  whileTap={{ scale: 0.95 }}
                >
                  <Flame className="w-5 h-5 text-white" />
                  <span className="font-cinzel text-base text-white">Desbloquear</span>
                </motion.button>

                {showError && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-center text-sm font-montserrat"
                  >
                    No es ese. Pista: empieza con &ldquo;G&rdquo; y suena como &ldquo;Google&rdquo;.
                  </motion.p>
                )}
              </form>
            </motion.div>
          )}

          {phase === 'done' && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full bg-black/60 backdrop-blur-md border-2 border-[#d4af37]/50 rounded-lg p-8 text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="inline-block mb-4"
              >
                <Unlock className="w-14 h-14 text-[#d4af37]" />
              </motion.div>
              <h3 className="font-cinzel text-2xl md:text-3xl text-[#d4af37] mb-2">
                Desbloqueado
              </h3>
              <p className="text-gray-300 font-montserrat">
                Un número infinitamente grande, como el amor que no cabe en ningún universo...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
