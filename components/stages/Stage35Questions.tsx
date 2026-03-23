'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Heart, Check, X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  funFact: string;
}

const questions: Question[] = [
  {
    question: '¿Cuál es la fecha en que empezamos nuestra relación?',
    options: ['23 de Diciembre', '30 de Diciembre', '1 de Enero', '14 de Febrero'],
    correctAnswer: 1,
    funFact: '30 de Diciembre de 2025 - El día que cambió todo'
  },
  {
    question: '¿Qué personaje de anime representa mi espíritu?',
    options: ['Luffy', 'Naruto', 'Natsu', 'Goku'],
    correctAnswer: 2,
    funFact: 'Como Natsu, mi fuego arde por vos'
  },
  {
    question: '¿En qué casa de Hogwarts estamos?',
    options: ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'],
    correctAnswer: 1,
    funFact: 'Ravenclaw - Donde la inteligencia se encuentra con el amor'
  },
  {
    question: '¿Cuánto te amo?',
    options: ['Mucho', 'Demasiado', 'Un Googolplex', 'Todo lo anterior'],
    correctAnswer: 3,
    funFact: 'La respuesta correcta siempre será: infinito'
  }
];

interface Stage35QuestionsProps {
  onNext: () => void;
}

export default function Stage35Questions({ onNext }: Stage35QuestionsProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#ffd700', '#ff69b4']
      });
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameComplete(true);
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#d4af37', '#ffd700', '#ff69b4', '#ff1493']
      });
    }
  };

  if (gameComplete) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center min-h-screen px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-center max-w-xl"
        >
          <Heart className="w-20 h-20 text-pink-500 fill-pink-500 mx-auto mb-6" />
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-[#d4af37] mb-4">
            ¡Perfecto!
          </h2>
          <p className="font-montserrat text-xl text-gray-300 mb-8">
            Obtuviste {score} de {questions.length} respuestas correctas
          </p>
          <p className="font-montserrat text-gray-400 mb-8">
            Pero la verdad es que en el amor, siempre ganamos los dos
          </p>
          <Button
            onClick={onNext}
            className="bg-gradient-to-r from-[#d4af37] to-pink-500 hover:from-[#b8941f] hover:to-pink-600 text-black font-cinzel font-semibold px-8 py-6 text-lg"
          >
            Continuar Nuestra Historia
          </Button>
        </motion.div>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 py-12"
    >
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#d4af37] mb-2">
            Preguntas de Amor
          </h2>
          <p className="font-montserrat text-gray-400">
            Pregunta {currentQuestion + 1} de {questions.length}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="bg-gradient-to-br from-black/60 to-[#d4af37]/5 backdrop-blur-xl border-2 border-[#d4af37]/40 rounded-lg p-8 shadow-[0_0_40px_rgba(212,175,55,0.2)]"
          >
            <h3 className="font-montserrat text-xl md:text-2xl text-gray-200 mb-6 text-center">
              {question.question}
            </h3>

            <div className="space-y-3 mb-6">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: showResult ? 1 : 1.02 }}
                  whileTap={{ scale: showResult ? 1 : 0.98 }}
                  onClick={() => !showResult && handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-lg font-montserrat text-left transition-all ${
                    showResult
                      ? index === question.correctAnswer
                        ? 'bg-green-500/30 border-2 border-green-500'
                        : index === selectedAnswer
                        ? 'bg-red-500/30 border-2 border-red-500'
                        : 'bg-black/40 border border-gray-600'
                      : 'bg-black/40 border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">{option}</span>
                    {showResult && index === question.correctAnswer && (
                      <Check className="w-5 h-5 text-green-500" />
                    )}
                    {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-500/20' : 'bg-pink-500/20'}`}>
                  <p className="font-montserrat text-gray-200 text-center">
                    {isCorrect ? '¡Correcto! ❤️' : 'Casi... pero te amo igual ❤️'}
                  </p>
                  <p className="font-montserrat text-sm text-gray-400 text-center mt-2">
                    {question.funFact}
                  </p>
                </div>

                <Button
                  onClick={handleNext}
                  className="w-full bg-gradient-to-r from-[#d4af37] to-pink-500 hover:from-[#b8941f] hover:to-pink-600 text-black font-cinzel font-semibold"
                >
                  {currentQuestion < questions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
