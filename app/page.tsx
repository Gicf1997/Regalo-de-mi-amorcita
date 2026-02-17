'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Stage0Intro from '@/components/stages/Stage0Intro';
import Stage1Ravenclaw from '@/components/stages/Stage1Ravenclaw';
import Stage2Chess from '@/components/stages/Stage2Chess';
import Stage3Math from '@/components/stages/Stage3Math';
import Stage4Finale from '@/components/stages/Stage4Finale';

const Background3D = dynamic(() => import('@/components/Background3D'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-[#050505]" />
});

export default function Home() {
  const [stage, setStage] = useState(0);

  const nextStage = () => {
    setStage((prev) => Math.min(prev + 1, 4));
  };

  return (
    <main className="relative min-h-screen bg-[#050505] overflow-x-hidden">
      <Background3D />

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {stage === 0 && <Stage0Intro key="stage0" onNext={nextStage} />}
          {stage === 1 && <Stage1Ravenclaw key="stage1" onNext={nextStage} />}
          {stage === 2 && <Stage2Chess key="stage2" onNext={nextStage} />}
          {stage === 3 && <Stage3Math key="stage3" onNext={nextStage} />}
          {stage === 4 && <Stage4Finale key="stage4" />}
        </AnimatePresence>
      </div>
    </main>
  );
}
