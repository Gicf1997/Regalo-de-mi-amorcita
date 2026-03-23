'use client';

import { motion } from 'framer-motion';
import HeartCatcherGame from '../HeartCatcherGame';
import { relationshipConfig } from '@/lib/relationship-config';

interface Stage25GameProps {
  onNext: () => void;
}

export default function Stage25Game({ onNext }: Stage25GameProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-4 py-8"
    >
      <div className="w-full max-w-4xl h-[80vh] relative">
        <HeartCatcherGame
          onComplete={onNext}
          targetScore={relationshipConfig.game.targetScore}
        />
      </div>
    </motion.div>
  );
}
