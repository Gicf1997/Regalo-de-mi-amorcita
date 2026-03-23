'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, Zap } from 'lucide-react';

interface Memory {
  date: string;
  title: string;
  description: string;
  icon: 'heart' | 'sparkles' | 'star' | 'zap';
}

const memories: Memory[] = [
  {
    date: '23 Feb',
    title: 'El Primer Día',
    description: 'Cuando todo comenzó con una sorpresa especial',
    icon: 'heart'
  },
  {
    date: 'Semana 1',
    title: 'Descubriendo Juntos',
    description: 'Cada mensaje, cada sonrisa, construyendo nuestro mundo',
    icon: 'sparkles'
  },
  {
    date: 'Semana 2',
    title: 'Creciendo en Amor',
    description: 'El amor que se hace más fuerte con cada día',
    icon: 'star'
  },
  {
    date: 'Semana 3',
    title: 'Momentos Mágicos',
    description: 'Las risas, los planes, los sueños compartidos',
    icon: 'zap'
  },
  {
    date: '23 Mar',
    title: 'Un Mes de Nosotros',
    description: 'Y esto es solo el comienzo de nuestra historia',
    icon: 'heart'
  }
];

const iconComponents = {
  heart: Heart,
  sparkles: Sparkles,
  star: Star,
  zap: Zap
};

export default function MemoryTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="w-full max-w-2xl mx-auto px-4"
    >
      <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-[#d4af37] text-center mb-8">
        Nuestro Primer Mes
      </h3>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d4af37] via-pink-500 to-[#d4af37]" />

        <div className="space-y-6">
          {memories.map((memory, index) => {
            const Icon = iconComponents[memory.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.3 }}
                className="relative pl-20"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                  className="absolute left-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-pink-500 flex items-center justify-center shadow-lg shadow-[#d4af37]/50"
                  style={{ top: '0.25rem' }}
                >
                  <Icon className="w-4 h-4 text-black" />
                </motion.div>

                <div className="bg-gradient-to-br from-black/60 to-[#d4af37]/5 backdrop-blur-sm border border-[#d4af37]/30 rounded-lg p-4 hover:border-pink-500/50 transition-colors">
                  <p className="text-[#d4af37] font-cinzel text-xs font-semibold mb-1">
                    {memory.date}
                  </p>
                  <h4 className="text-pink-300 font-cinzel text-lg font-semibold mb-1">
                    {memory.title}
                  </h4>
                  <p className="text-gray-400 font-montserrat text-sm">
                    {memory.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
