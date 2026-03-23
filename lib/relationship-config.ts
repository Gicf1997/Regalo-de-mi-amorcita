export const relationshipConfig = {
  startDate: '30 de Diciembre, 2025',
  updateDate: '30 de Marzo, 2026',

  names: {
    her: 'Ali',
    him: 'Gus',
  },

  intro: {
    title: 'Tres Meses de Amor',
    subtitle: '30 de Diciembre - 30 de Marzo',
    message: '3 meses de amor eterno',
  },

  timeline: {
    title: 'Nuestros Primeros Tres Meses',
    memories: [
      {
        date: '30 Dic',
        title: 'El Primer Día',
        description: 'Cuando todo comenzó y supimos que esto era especial',
        icon: 'heart' as const,
      },
      {
        date: 'Mes 1',
        title: 'Descubriendo Juntos',
        description: 'Cada mensaje, cada sonrisa, construyendo nuestro mundo',
        icon: 'sparkles' as const,
      },
      {
        date: 'Mes 2',
        title: 'Creciendo en Amor',
        description: 'El amor que se hace más fuerte con cada día',
        icon: 'star' as const,
      },
      {
        date: 'Mes 3',
        title: 'Amor Consolidado',
        description: 'Las risas, los planes, los sueños compartidos',
        icon: 'zap' as const,
      },
      {
        date: '30 Mar',
        title: 'Tres Meses de Nosotros',
        description: 'Y esto es solo el comienzo de nuestra historia infinita',
        icon: 'heart' as const,
      },
    ],
  },

  stats: {
    days: 90,
    hours: 2160,
    minutes: 129600,
  },

  finaleLetter: {
    title: 'Tres Meses de Amor',
    date: '30 de Diciembre, 2025 - 30 de Marzo, 2026',

    paragraphs: [
      'Mi Ali,',

      '\nHan pasado tres meses desde aquel 30 de diciembre. Noventa días que han sido un viaje increíble de descubrimiento, risas y amor verdadero. Cada momento contigo confirma que elegí bien, que vos sos mi destino.',

      '\nEn estos tres meses aprendí que el amor no es solo fuego como el de Natsu, es también la calma que encuentro cuando te veo sonreír. Es saber que incluso en mis peores días, pensarte me hace mejor persona.',

      '\nCada día que pasa, mi amor por vos crece exponencialmente. No es una función lineal, es una curva que tiende al infinito. Como Dirac entendió el universo cuántico, yo cada día entiendo mejor lo afortunado que soy de tenerte.',

      '\nTres meses son solo el comienzo de nuestra ecuación. Hay infinitos meses por delante, infinitas sonrisas, infinitos momentos. Y quiero vivirlos todos con vos.',

      '\nTe amo más hoy que hace tres meses, y mañana te amaré más que hoy. Porque así funciona esto, mi amor: crece, evoluciona, se vuelve más fuerte.',

      '\nGracias por estos tres meses perfectos. Por cada mensaje, cada risa, cada "te amo". Por ser mi Ali, mi reina, mi todo.',

      '\nCon todo el amor que crece cada día,\nTu Novio Gus\n\nP.D: Esta sorpresa es para vos, porque vos haces que todo valga la pena.'
    ],

    closingMessage: 'Hay quien dice \'mañana\' para no decidir, yo te digo \'ahora\' porque ya te elegí. Soy tu novio, tu amorcito, tu refugio y, sobre todo, tu hombre.',
  },

  characters: {
    intro: 'natsu',
    ravenclaw: 'dumbledore',
    chess: 'chess-master',
    math: 'math-wizard',
    finale: 'happy',
  },

  images: {
    ravenclaw: '/sprites/ravenclaw-crest.png',
    sortingHat: '/sprites/sorting-hat.png',
    diracEquation: '/sprites/dirac-equation.jpg',
    portada: '/sprites/portada.jpg',
  },

  game: {
    enabled: true,
    targetScore: 30,
    title: 'Atrapa Mi Amor',
    instructions: 'Mueve tu dedo o mouse para atrapar corazones, flores y estrellas',
  },
};

export type RelationshipConfig = typeof relationshipConfig;
