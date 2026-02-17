'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function EulerIdentity({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  const constants = [
    { symbol: 'e', name: 'Número de Euler', desc: 'La base del crecimiento natural, lo que florece sin límite', color: 'text-emerald-400' },
    { symbol: 'i', name: 'Unidad imaginaria', desc: 'Lo que no vemos pero sentimos, lo que existe más allá de lo real', color: 'text-cyan-400' },
    { symbol: 'π', name: 'Pi', desc: 'La perfección del círculo, lo infinito contenido en lo finito', color: 'text-amber-400' },
    { symbol: '1', name: 'La unidad', desc: 'El comienzo de todo. Tú.', color: 'text-pink-400' },
    { symbol: '0', name: 'El cero', desc: 'El equilibrio perfecto, donde todo encaja', color: 'text-white' },
  ];

  useEffect(() => {
    if (step < constants.length) {
      const timer = setTimeout(() => setStep(s => s + 1), 1800);
      return () => clearTimeout(timer);
    }
  }, [step, constants.length]);

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <h3 className="font-cinzel text-xl md:text-2xl text-emerald-400 mb-2">
          La Ecuación Más Hermosa
        </h3>
        <p className="text-gray-400 font-montserrat text-sm">
          Cinco constantes de mundos diferentes, unidas en una sola verdad
        </p>
      </div>

      <div className="grid grid-cols-5 gap-2 md:gap-3 max-w-lg mx-auto">
        {constants.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={i < step ? { opacity: 1, y: 0 } : { opacity: 0.15, y: 10 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className={`p-2 md:p-3 rounded-lg border text-center transition-colors duration-500 ${
              i < step
                ? 'bg-black/60 border-emerald-500/40'
                : 'bg-gray-900/20 border-gray-800/30'
            }`}
          >
            <div className={`text-2xl md:text-3xl font-bold ${c.color} mb-1 font-montserrat`}>
              {c.symbol}
            </div>
            <div className="text-gray-400 text-[10px] md:text-xs font-montserrat leading-tight">
              {c.name}
            </div>
          </motion.div>
        ))}
      </div>

      {step >= constants.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 80 }}
          className="text-center space-y-4 mt-4"
        >
          <motion.div
            animate={{
              textShadow: [
                '0 0 10px rgba(16,185,129,0.3)',
                '0 0 30px rgba(16,185,129,0.7)',
                '0 0 10px rgba(16,185,129,0.3)'
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <div className="text-4xl md:text-6xl font-bold text-white font-math">
              e<sup className="text-cyan-400">iπ</sup> + 1 = 0
            </div>
          </motion.div>
          <p className="text-emerald-300/80 font-montserrat text-sm leading-relaxed max-w-sm mx-auto">
            Euler unió cinco mundos diferentes de las matemáticas en una sola ecuación perfecta.
          </p>
          <p className="text-gray-400 font-montserrat text-sm italic">
            Como nosotros: física y matemáticas, dragón y reina, juntos creamos algo perfecto.
          </p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={onComplete}
            className="mx-auto flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg hover:scale-105 transition-transform border border-emerald-400/50"
          >
            <span className="font-cinzel text-base text-white">Continuar</span>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}

export function PianoFibonacci({ onComplete }: { onComplete: () => void }) {
  const [revealStep, setRevealStep] = useState(0);

  useEffect(() => {
    if (revealStep < 4) {
      const timer = setTimeout(() => setRevealStep(s => s + 1), 2000);
      return () => clearTimeout(timer);
    }
  }, [revealStep]);

  const whiteKeys = [0, 1, 2, 3, 4, 5, 6, 7];
  const blackKeyPositions = [0, 1, 3, 4, 5];

  return (
    <div className="space-y-6">
      <div className="text-center mb-2">
        <h3 className="font-cinzel text-xl md:text-2xl text-[#d4af37] mb-2">
          La Música de los Números
        </h3>
        <p className="text-gray-400 font-montserrat text-sm">
          Fibonacci se esconde en las teclas del piano
        </p>
      </div>

      <div className="flex justify-center">
        <div className="relative h-32 md:h-40">
          <div className="flex">
            {whiteKeys.map((_, i) => (
              <motion.div
                key={`white-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="w-9 md:w-11 h-32 md:h-40 bg-gradient-to-b from-gray-100 to-gray-300 border border-gray-400 rounded-b-md mx-[1px] relative"
              />
            ))}
          </div>
          <div className="absolute top-0 left-0 flex pointer-events-none">
            {whiteKeys.map((_, i) => {
              if (!blackKeyPositions.includes(i)) return <div key={`spacer-${i}`} className="w-9 md:w-11 mx-[1px]" />;
              return (
                <div key={`black-container-${i}`} className="relative w-9 md:w-11 mx-[1px]">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="absolute right-[-8px] md:right-[-9px] top-0 w-6 md:w-7 h-20 md:h-24 bg-gradient-to-b from-gray-900 to-black rounded-b-md border border-gray-700 z-10"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 md:gap-6">
        {[
          { n: '8', label: 'teclas blancas', color: 'text-white' },
          { n: '5', label: 'teclas negras', color: 'text-gray-400' },
          { n: '13', label: 'total', color: 'text-[#d4af37]' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: revealStep > 0 ? 1 : 0 }}
            transition={{ delay: i * 0.3 }}
            className="text-center"
          >
            <div className={`text-2xl md:text-3xl font-bold ${item.color} font-montserrat`}>{item.n}</div>
            <div className="text-gray-500 text-xs font-montserrat">{item.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: revealStep >= 2 ? 1 : 0 }}
        className="text-center space-y-1"
      >
        <p className="text-[#d4af37] font-cinzel text-lg">1, 1, 2, 3, 5, 8, 13, 21, 34...</p>
        <p className="text-gray-400 font-montserrat text-sm">
          La secuencia de Fibonacci. Cada número es la suma de los dos anteriores.
        </p>
        <p className="text-gray-500 font-montserrat text-xs">
          Aparece en las galaxias, las flores, las conchas marinas... y en cada octava del piano.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: revealStep >= 3 ? 1 : 0 }}
        className="bg-black/40 border border-[#d4af37]/20 rounded-lg p-4 space-y-3"
      >
        <p className="text-gray-300 font-montserrat text-sm leading-relaxed text-center">
          Cuando Yiruma toca, cada nota es un número que se convierte en emoción.
          Cada acorde es un teorema vivo.
        </p>
        <p className="text-[#d4af37]/80 font-montserrat text-sm leading-relaxed text-center italic">
          Cuando tus dedos tocan las teclas del piano, estás transformando matemáticas
          puras en arte. La última vez que tocaste una pieza para piano...
          no necesité entender la partitura para sentir absolutamente todo.
        </p>
      </motion.div>

      {revealStep >= 4 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onComplete}
          className="mx-auto flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-lg hover:scale-105 transition-transform border border-[#d4af37]/50"
        >
          <span className="font-cinzel text-base text-black font-semibold">Continuar</span>
        </motion.button>
      )}
    </div>
  );
}

export function DiracBuildup({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < 4) {
      const timer = setTimeout(() => setStep(s => s + 1), 2200);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onComplete, 1500);
      return () => clearTimeout(timer);
    }
  }, [step, onComplete]);

  const parts = [
    { symbol: 'i', label: 'Unidad imaginaria', desc: 'Lo que no vemos pero sentimos' },
    { symbol: '∂̸', label: 'Derivada parcial', desc: 'El cambio constante del universo' },
    { symbol: 'm', label: 'Masa', desc: 'Lo que nos da presencia en el mundo' },
    { symbol: 'ψ', label: 'Función de onda', desc: 'La esencia de toda partícula' },
  ];

  return (
    <div className="space-y-6">
      <h3 className="font-cinzel text-xl md:text-2xl text-orange-400 text-center mb-4">
        Decodificando la Ecuación...
      </h3>
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {parts.map((part, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={i <= step ? { opacity: 1, scale: 1 } : { opacity: 0.2, scale: 0.8 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className={`p-4 rounded-lg border text-center transition-colors duration-500 ${
              i <= step
                ? 'bg-orange-950/50 border-orange-500/50'
                : 'bg-gray-900/30 border-gray-700/30'
            }`}
          >
            <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-math">
              {part.symbol}
            </div>
            <div className="text-orange-400 text-sm font-cinzel">{part.label}</div>
            <div className="text-gray-400 text-xs mt-1 font-montserrat">{part.desc}</div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {[0, 1, 2, 3, 4].map(i => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${
              i <= step ? 'bg-orange-500 w-6' : 'bg-gray-700 w-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function GoogolplexVisual() {
  const [counter, setCounter] = useState(0);
  const [showGiveUp, setShowGiveUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev >= 999) {
          setShowGiveUp(true);
          return prev;
        }
        return prev + Math.floor(Math.random() * 47) + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const comparisons = [
    { label: 'Átomos en el universo observable', value: '10⁸⁰' },
    { label: 'Googol', value: '10¹⁰⁰' },
    { label: 'Googolplex', value: '10^(10¹⁰⁰)' },
    { label: 'Estrellas en todas las galaxias', value: '~10²⁴' },
    { label: 'Segundos desde el Big Bang', value: '~4×10¹⁷' },
    { label: 'El amor que siento por ti', value: '> Todo eso junto' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-black/60 rounded-lg border border-orange-500/30 p-6">
        <h4 className="font-cinzel text-lg text-orange-400 mb-4 text-center">
          Intentando contar hasta Googolplex...
        </h4>
        <div className="text-center mb-4">
          <motion.span
            className="text-4xl md:text-5xl font-bold text-white font-montserrat tabular-nums"
            animate={showGiveUp ? {} : { opacity: [1, 0.7, 1] }}
            transition={{ duration: 0.1, repeat: Infinity }}
          >
            {counter.toLocaleString()}
          </motion.span>
          {showGiveUp && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm mt-2 font-montserrat"
            >
              ... ni siquiera hemos empezado.
            </motion.p>
          )}
        </div>

        <div className="bg-black/40 rounded p-3 mt-4">
          <p className="text-gray-500 text-xs font-montserrat text-center leading-relaxed">
            Un Googolplex tiene tantos dígitos que aunque escribieras uno en cada átomo del universo,
            no tendrías suficientes átomos. Si empezaras a escribirlo al nacer,
            escribiendo un dígito por segundo, el universo entero habría muerto
            de frío antes de que terminaras.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {comparisons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.4 }}
            className={`flex items-center justify-between px-4 py-3 rounded-lg border ${
              i === comparisons.length - 1
                ? 'bg-gradient-to-r from-pink-950/50 to-orange-950/50 border-pink-500/50'
                : 'bg-black/40 border-gray-700/30'
            }`}
          >
            <span className={`text-sm font-montserrat ${
              i === comparisons.length - 1 ? 'text-pink-300 font-semibold' : 'text-gray-400'
            }`}>
              {item.label}
            </span>
            <span className={`font-math font-bold ${
              i === comparisons.length - 1 ? 'text-pink-400 text-lg' : 'text-white text-sm'
            }`}>
              {item.value}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="text-center text-gray-300 font-montserrat text-sm leading-relaxed"
      >
        Ni todos los átomos del universo, ni todos los segundos desde el Big Bang,
        ni todas las estrellas de todas las galaxias juntas...
        <br />
        <span className="text-pink-400 font-semibold">
          nada alcanza para medir lo que siento por vos.
        </span>
      </motion.p>
    </div>
  );
}
