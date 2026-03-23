# 🎨 Guía de Personalización - Sitio Web Romántico

Esta guía te ayudará a personalizar completamente el sitio web para tu novia. Todo está organizado para que sea fácil de modificar.

## 📁 Archivo Principal de Configuración

**Ubicación:** `/lib/relationship-config.ts`

Este es el archivo MÁS IMPORTANTE. Aquí puedes cambiar todos los textos, fechas y contenido personalizado.

### 🔧 Cómo Personalizar

#### 1. Fechas y Nombres

```typescript
startDate: '30 de Diciembre, 2025',  // Fecha en que empezó la relación
updateDate: '30 de Marzo, 2026',     // Fecha de esta actualización

names: {
  her: 'Ali',  // Nombre de tu novia
  him: 'Gus',  // Tu nombre
},
```

#### 2. Pantalla de Inicio

```typescript
intro: {
  title: 'Tres Meses de Amor',              // Título principal
  subtitle: '30 de Diciembre - 30 de Marzo', // Subtítulo con fechas
  message: '3 meses de amor eterno',        // Mensaje en la parte inferior
},
```

#### 3. Línea de Tiempo de Recuerdos

Puedes modificar cada evento en la línea de tiempo:

```typescript
timeline: {
  title: 'Nuestros Primeros Tres Meses',
  memories: [
    {
      date: '30 Dic',                     // Fecha corta
      title: 'El Primer Día',             // Título del recuerdo
      description: 'Cuando todo comenzó...', // Descripción
      icon: 'heart' as const,             // Icono: 'heart', 'sparkles', 'star', 'zap'
    },
    // Agrega más recuerdos aquí...
  ],
},
```

#### 4. Estadísticas de Amor

```typescript
stats: {
  days: 90,      // Número de días juntos
  hours: 2160,   // Horas (días × 24)
  minutes: 129600, // Minutos (horas × 60)
},
```

#### 5. Carta Final

La carta más importante - personaliza cada párrafo:

```typescript
finaleLetter: {
  title: 'Tres Meses de Amor',
  date: '30 de Diciembre, 2025 - 30 de Marzo, 2026',

  paragraphs: [
    'Mi Ali,',
    '\nPrimer párrafo...',
    '\nSegundo párrafo...',
    // Agrega o modifica párrafos aquí
  ],

  closingMessage: 'Mensaje de cierre...',
},
```

---

## 🎮 Personalizar el Juego de Preguntas

**Ubicación:** `/components/stages/Stage35Questions.tsx`

Busca la constante `questions` (línea ~13) y modifica las preguntas:

```typescript
const questions: Question[] = [
  {
    question: '¿Tu pregunta aquí?',
    options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
    correctAnswer: 2, // Índice de la respuesta correcta (0-3)
    funFact: 'Dato divertido o romántico aquí'
  },
  // Agrega más preguntas...
];
```

---

## 🖼️ Agregar o Cambiar Imágenes

### Ubicación de Imágenes
Todas las imágenes van en: `/public/sprites/`

### Imágenes Actuales:
- `natsu.png` - Personaje de anime
- `happy.png` - Personaje feliz
- `dumbledore.png` - Para la etapa de Ravenclaw
- `chess-master.png` - Para la etapa de ajedrez
- `math-wizard.png` - Para la etapa de matemáticas
- `ravenclaw-crest.png` - Escudo de Ravenclaw
- `sorting-hat.png` - Sombrero seleccionador
- `dirac-equation.jpg` - Ecuación de Dirac
- `portada.jpg` - Imagen de portada

### Cómo Agregar Nuevas Imágenes:

1. Coloca tu imagen en `/public/sprites/`
2. Actualiza la configuración en `/lib/relationship-config.ts`:

```typescript
images: {
  tuNuevaImagen: '/sprites/nombre-de-tu-imagen.png',
},
```

3. Usa la imagen en los componentes:

```jsx
<img src="/sprites/nombre-de-tu-imagen.png" alt="Descripción" />
```

---

## 🎭 Personalizar Etapas Existentes

### Etapa 1: Ravenclaw
**Archivo:** `/components/stages/Stage1Ravenclaw.tsx`

- Modifica el texto del Sombrero Seleccionador (línea ~30)
- Cambia la descripción de Ravenclaw (línea ~50)

### Etapa 2: Ajedrez
**Archivo:** `/components/stages/Stage2Chess.tsx`

- El juego de ajedrez es completamente funcional
- Puedes modificar los mensajes de victoria/derrota

### Etapa 3: Matemáticas
**Archivo:** `/components/stages/Stage3Math.tsx`

- Modifica las ecuaciones mostradas
- Cambia los textos explicativos

---

## ➕ Agregar Nueva Etapa

Para agregar una nueva etapa completamente nueva:

1. **Crea el archivo de la etapa:**
   `/components/stages/StageTuNombre.tsx`

```typescript
'use client';

import { motion } from 'framer-motion';

interface StageTuNombreProps {
  onNext: () => void;
}

export default function StageTuNombre({ onNext }: StageTuNombreProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-4"
    >
      <h2 className="font-cinzel text-4xl text-[#d4af37]">
        Tu Contenido Aquí
      </h2>
      <button onClick={onNext}>Siguiente</button>
    </motion.div>
  );
}
```

2. **Importa en la página principal:**
   `/app/page.tsx`

```typescript
import StageTuNombre from '@/components/stages/StageTuNombre';
```

3. **Agrega al flujo:**

```typescript
// Aumenta el número máximo de etapas
const nextStage = () => {
  setStage((prev) => Math.min(prev + 1, 7)); // Aumenta este número
};

// Agrega tu etapa
{stage === 7 && <StageTuNombre key="stage7" onNext={nextStage} />}
```

---

## 🎨 Personalizar Colores

Los colores principales se definen usando clases de Tailwind CSS:

- **Dorado:** `text-[#d4af37]` o `bg-[#d4af37]`
- **Rosa:** `text-pink-500` o `bg-pink-500`
- **Negro:** `bg-black` o `bg-[#050505]`

Para cambiar colores en cualquier componente, busca estas clases y cámbielas.

---

## 🎵 Agregar Música (Opcional)

Si quieres agregar música de fondo:

1. Coloca el archivo de audio en `/public/audio/`
2. En el componente donde quieras música:

```typescript
useEffect(() => {
  const audio = new Audio('/audio/tu-cancion.mp3');
  audio.play();
  return () => audio.pause();
}, []);
```

---

## 📝 Consejos de Personalización

### ✨ Ideas de Contenido:

1. **Línea de Tiempo:** Agrega momentos específicos que compartieron
2. **Preguntas:** Usa bromas internas o referencias que solo ustedes entiendan
3. **Carta Final:** Escribe desde el corazón, menciona detalles específicos
4. **Imágenes:** Usa fotos de ustedes dos (asegúrate de que sean apropiadas)

### 🎯 Mejores Prácticas:

- Haz pruebas después de cada cambio
- Guarda copias de seguridad antes de hacer cambios grandes
- Los textos largos deben usar `\n` para saltos de línea
- Las comillas simples dentro del texto deben escribirse como `\'`

---

## 🚀 Construir y Probar

Después de hacer cambios:

```bash
npm run build
npm run dev
```

Visita: `http://localhost:3000`

---

## 📋 Checklist de Personalización

- [ ] Actualicé las fechas en `relationship-config.ts`
- [ ] Cambié los nombres en `relationship-config.ts`
- [ ] Personalicé la línea de tiempo con nuestros recuerdos
- [ ] Actualicé las estadísticas (días, horas, minutos)
- [ ] Escribí la carta final desde el corazón
- [ ] Modifiqué las preguntas del juego
- [ ] Agregué/reemplacé imágenes personales
- [ ] Probé todo el flujo del sitio
- [ ] Verifiqué que no hay errores de ortografía

---

## 🆘 Solución de Problemas

**Problema:** El sitio no carga
- Ejecuta: `npm install`
- Luego: `npm run build`

**Problema:** Los cambios no se ven
- Refresca la página con Ctrl+F5 (o Cmd+Shift+R en Mac)

**Problema:** Error de sintaxis
- Verifica que todas las comillas estén cerradas
- Asegúrate de que las comas estén en su lugar

---

## 💝 Recuerda

Este sitio es una expresión de amor. Tómate tu tiempo para personalizarlo, hazlo tuyo, y que refleje tu relación única. ¡Buena suerte! 🎉
