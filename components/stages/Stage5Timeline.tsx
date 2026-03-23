'use client';

import { motion } from 'framer-motion';
import MemoryTimeline from '../MemoryTimeline';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

interface Stage5TimelineProps {
  onNext: () => void;
}

export default function Stage5Timeline({ onNext }: Stage5TimelineProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center min-h-screen px-4 py-12"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-4xl"
      >
        <MemoryTimeline />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        className="mt-12"
      >
        <Button
          onClick={onNext}
          className="bg-gradient-to-r from-[#d4af37] to-pink-500 hover:from-[#b8941f] hover:to-pink-600 text-black font-cinzel font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-[#d4af37]/50 transition-all"
        >
          Ver la Carta Final
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
