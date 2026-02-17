'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Flame, Cat, Wand2, Shield, Crown, Sparkles, BookOpenCheck } from 'lucide-react';

interface CharacterSpriteProps {
  character: 'sorting-hat' | 'natsu' | 'happy' | 'ravenclaw-crest' | 'chess-master' | 'math-wizard' | 'dumbledore';
  className?: string;
}

const fallbacks: Record<string, { icon: React.ReactNode; bg: string; border: string; label: string }> = {
  'sorting-hat': {
    icon: <Wand2 className="w-16 h-16 md:w-20 md:h-20 text-[#d4af37]" />,
    bg: 'from-amber-900/40 to-amber-800/20',
    border: 'border-[#d4af37]/40',
    label: 'Sombrero Seleccionador'
  },
  'natsu': {
    icon: <Flame className="w-16 h-16 md:w-20 md:h-20 text-orange-400" />,
    bg: 'from-orange-900/40 to-red-900/20',
    border: 'border-orange-500/40',
    label: 'Natsu Dragneel'
  },
  'happy': {
    icon: <Cat className="w-16 h-16 md:w-20 md:h-20 text-blue-400" />,
    bg: 'from-blue-900/40 to-blue-800/20',
    border: 'border-blue-400/40',
    label: 'Happy'
  },
  'ravenclaw-crest': {
    icon: <Shield className="w-16 h-16 md:w-20 md:h-20 text-blue-400" />,
    bg: 'from-blue-900/40 to-blue-800/20',
    border: 'border-blue-400/60',
    label: 'Escudo de Ravenclaw'
  },
  'chess-master': {
    icon: <Crown className="w-16 h-16 md:w-20 md:h-20 text-slate-300" />,
    bg: 'from-slate-800/40 to-slate-900/20',
    border: 'border-slate-400/40',
    label: 'Maestro de Ajedrez'
  },
  'math-wizard': {
    icon: <BookOpenCheck className="w-16 h-16 md:w-20 md:h-20 text-emerald-400" />,
    bg: 'from-emerald-900/40 to-emerald-800/20',
    border: 'border-emerald-400/40',
    label: 'Mago Matemático'
  },
  'dumbledore': {
    icon: <Sparkles className="w-16 h-16 md:w-20 md:h-20 text-purple-300" />,
    bg: 'from-purple-900/40 to-indigo-900/20',
    border: 'border-purple-400/40',
    label: 'Dumbledore'
  }
};

export default function CharacterSprite({ character, className = '' }: CharacterSpriteProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const urls: Record<string, string> = {
    'sorting-hat': '/sprites/sorting-hat.png',
    'natsu': '/sprites/natsu.png',
    'happy': '/sprites/happy.png',
    'ravenclaw-crest': '/sprites/ravenclaw-crest.png',
    'chess-master': '/sprites/chess-master.png',
    'math-wizard': '/sprites/math-wizard.png',
    'dumbledore': '/sprites/dumbledore.png'
  };

  const fb = fallbacks[character];
  const url = urls[character];
  const hasUrl = url && !imgFailed;

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex flex-col items-center gap-2 ${className}`}
    >
      <div className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-b ${fb.bg} border-2 ${fb.border} flex items-center justify-center overflow-hidden shadow-lg`}>
        {hasUrl ? (
          <Image
            src={url}
            alt={fb.label}
            fill
            className="object-cover"
            onError={() => setImgFailed(true)}
            sizes="(max-width: 128px) 100vw, 128px"
            priority
          />
        ) : (
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {fb.icon}
          </motion.div>
        )}
      </div>
      <span className="text-xs md:text-sm text-gray-400 font-montserrat">{fb.label}</span>
    </motion.div>
  );
}
