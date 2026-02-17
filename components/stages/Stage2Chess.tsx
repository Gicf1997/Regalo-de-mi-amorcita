'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { Sparkles, AlertCircle, Crown } from 'lucide-react';

interface Stage2ChessProps {
  onNext: () => void;
}

export default function Stage2Chess({ onNext }: Stage2ChessProps) {
  const [game] = useState(new Chess('6k1/5ppp/8/8/8/6Q1/1B6/6K1 w - - 0 1'));
  const [position, setPosition] = useState(game.fen());
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [boardSize, setBoardSize] = useState(400);
  const [borderFlash, setBorderFlash] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setBoardSize(Math.min(width - 32, 480));
      }
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  function onDrop(sourceSquare: string, targetSquare: string) {
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q'
      });

      if (move === null) {
        triggerError();
        return false;
      }

      setPosition(game.fen());

      if (game.isCheckmate()) {
        setTimeout(() => setShowSuccess(true), 500);
      } else {
        game.undo();
        setPosition(game.fen());
        triggerError();
        return false;
      }

      return true;
    } catch {
      triggerError();
      return false;
    }
  }

  function triggerError() {
    setShowError(true);
    setBorderFlash(true);
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (newAttempts >= 3) {
      setShowHint(true);
    }

    setTimeout(() => setShowError(false), 2000);
    setTimeout(() => setBorderFlash(false), 600);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 py-12"
    >
      <AnimatePresence mode="wait">
        {!showSuccess ? (
          <motion.div
            key="chess"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-full max-w-xl flex flex-col items-center gap-6"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Crown className="w-8 h-8 text-[#d4af37]" />
                <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#d4af37]">
                  El Beso de la Reina
                </h2>
                <Crown className="w-8 h-8 text-[#d4af37]" />
              </div>
              <p className="text-base md:text-lg text-gray-300 font-montserrat">
                Encuentra el mate en 1 movimiento
              </p>
              <p className="text-sm text-gray-500 mt-1 font-montserrat">
                Las blancas juegan y dan jaque mate
              </p>
            </div>

            <div
              ref={containerRef}
              className={`w-full rounded-lg p-4 transition-all duration-300 ${
                borderFlash
                  ? 'bg-red-950/30 border-2 border-red-500/70 shadow-[0_0_24px_rgba(239,68,68,0.3)]'
                  : 'bg-black/50 backdrop-blur-md border-2 border-[#d4af37]/30 shadow-[0_0_24px_rgba(212,175,55,0.15)]'
              }`}
            >
              <div className="flex justify-center">
                <Chessboard
                  {...({
                    id: 'QueenKiss',
                    position: position,
                    onPieceDrop: onDrop,
                    boardWidth: boardSize,
                    customBoardStyle: {
                      borderRadius: '4px',
                      boxShadow: '0 0 24px rgba(212,175,55,0.25)'
                    },
                    customDarkSquareStyle: { backgroundColor: '#4a3728' },
                    customLightSquareStyle: { backgroundColor: '#e8d5b5' }
                  } as any)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between w-full max-w-md">
              <p className="text-gray-500 text-sm font-montserrat">
                Intentos: <span className="text-[#d4af37] font-bold">{attempts}</span>
              </p>
              <AnimatePresence>
                {showError && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex items-center gap-2 text-red-400 text-sm"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span className="font-montserrat">No es mate. Intenta de nuevo.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="w-full max-w-md bg-blue-950/40 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4"
                >
                  <h4 className="text-blue-400 font-cinzel text-sm mb-1">Pista del Sombrero:</h4>
                  <p className="text-gray-300 font-montserrat text-sm leading-relaxed">
                    El Rey negro necesita un beso. La Dama blanca puede moverse a g7,
                    protegida por el Alfil en b2. Ese es el &ldquo;Beso de la Reina&rdquo;.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-gray-600 text-xs font-montserrat text-center max-w-sm italic">
              Sé que vos literalmente enseñás ajedrez y yo apenas sé mover las piezas...
              pero al menos sé que la Reina lo puede todo.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="flex flex-col items-center gap-8 text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Sparkles className="w-20 h-20 text-[#d4af37]" />
            </motion.div>
            <div>
              <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-[#d4af37] mb-3">
                Jaque Mate
              </h2>
              <p className="text-lg md:text-xl text-gray-300 font-montserrat">
                La Dama besó al Rey. Victoria perfecta.
              </p>
              <p className="text-sm text-gray-500 mt-2 font-montserrat">
                Resuelto en {attempts + 1} {attempts === 0 ? 'intento' : 'intentos'}
              </p>
            </div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={onNext}
              className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
            >
              <span className="font-cinzel text-lg font-semibold text-black">
                Siguiente Nivel
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
