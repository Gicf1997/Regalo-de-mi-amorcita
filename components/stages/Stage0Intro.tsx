'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface Stage0IntroProps {
  onNext: () => void;
}

export default function Stage0Intro({ onNext }: Stage0IntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-4"
    >
      <motion.div
        initial={{ scale: 0.5, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
        className="text-center"
      >
        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-[#d4af37] mb-4 drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">
          Lo que Siento por Tí
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 font-montserrat"
        >
          Un pequeño detalle por el día de los enamorados que hice con mucho amor para vos.
          Y...  perdón por la espera, pero quería que fuera perfecto para ti.
        </motion.p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        onClick={onNext}
        className="group relative px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
      >
        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        <div className="relative flex items-center gap-3">
          <Play className="w-5 h-5" />
          <span className="font-cinzel text-lg font-semibold text-black">
            INICIEMOS!
          </span>
        </div>
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 text-gray-500 text-sm font-montserrat"
      >
        Y...  perdón por la espera, pero quería que fuera perfecto para ti.
      </motion.div>
    </motion.div>
  );
}
