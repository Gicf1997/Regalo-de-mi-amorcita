# 🗺️ Mapa de Archivos - Referencia Rápida

## 📍 ¿Qué archivo debo modificar para...?

### 🎯 Cambios Rápidos (Lo Más Común)

| Quiero cambiar... | Archivo | Línea aproximada |
|-------------------|---------|------------------|
| **Fechas, nombres, textos principales** | `/lib/relationship-config.ts` | Todo el archivo |
| **Preguntas del juego** | `/components/stages/Stage35Questions.tsx` | ~13 |
| **Agregar imágenes** | `/public/sprites/` | - |

---

## 📂 Estructura Completa del Proyecto

```
project/
│
├── 📁 app/
│   ├── page.tsx                    ← Flujo principal (orden de etapas)
│   ├── layout.tsx                  ← Configuración de fonts
│   └── globals.css                 ← Estilos globales
│
├── 📁 components/
│   │
│   ├── 📁 stages/                  ← ETAPAS DEL JUEGO
│   │   ├── Stage0Intro.tsx         ← Pantalla de inicio
│   │   ├── Stage1Ravenclaw.tsx     ← Etapa de Ravenclaw
│   │   ├── Stage2Chess.tsx         ← Juego de ajedrez
│   │   ├── Stage3Math.tsx          ← Etapa de matemáticas
│   │   ├── Stage35Questions.tsx    ← Juego de preguntas (NUEVO)
│   │   ├── Stage5Timeline.tsx      ← Línea de tiempo de recuerdos
│   │   └── Stage4Finale.tsx        ← Carta final
│   │
│   ├── Background3D.tsx            ← Fondo animado
│   ├── CharacterSprite.tsx         ← Mostrar personajes/sprites
│   ├── MemoryTimeline.tsx          ← Componente de línea de tiempo
│   └── 📁 ui/                      ← Componentes de interfaz (botones, etc)
│
├── 📁 lib/
│   ├── relationship-config.ts      ← ⭐ ARCHIVO PRINCIPAL DE CONFIGURACIÓN
│   └── utils.ts                    ← Utilidades
│
├── 📁 public/
│   └── 📁 sprites/                 ← TODAS LAS IMÁGENES
│       ├── natsu.png
│       ├── happy.png
│       ├── dumbledore.png
│       ├── chess-master.png
│       ├── math-wizard.png
│       ├── ravenclaw-crest.png
│       ├── sorting-hat.png
│       ├── dirac-equation.jpg
│       └── portada.jpg
│
└── 📄 CUSTOMIZATION-GUIDE.md       ← Guía detallada de personalización
```

---

## 🎨 Guía Rápida por Tarea

### ✏️ Cambiar Textos y Fechas
**Archivo:** `/lib/relationship-config.ts`
- Todo el contenido de texto está aquí
- Fechas, nombres, mensajes, estadísticas
- Párrafos de la carta final

### 🎮 Modificar Etapas

#### Pantalla de Inicio
**Archivo:** `/components/stages/Stage0Intro.tsx`
- Ya usa `relationship-config.ts` automáticamente
- Solo modifica el config

#### Ravenclaw
**Archivo:** `/components/stages/Stage1Ravenclaw.tsx`
- Línea ~30: Texto del Sombrero Seleccionador
- Línea ~50: Descripción de Ravenclaw

#### Ajedrez
**Archivo:** `/components/stages/Stage2Chess.tsx`
- Línea ~70: Mensajes del maestro de ajedrez
- Línea ~100: Mensaje de victoria
- Línea ~120: Mensaje de ayuda

#### Matemáticas
**Archivo:** `/components/stages/Stage3Math.tsx`
- Línea ~40: Introducción
- Línea ~60: Explicación de ecuaciones
- Línea ~80: Mensajes personalizados

#### Juego de Preguntas
**Archivo:** `/components/stages/Stage35Questions.tsx`
- Línea ~13-45: Array de preguntas
- Cada pregunta tiene: texto, opciones, respuesta correcta, dato curioso

#### Línea de Tiempo
**Archivo:** `/components/stages/Stage5Timeline.tsx`
- Ya usa `relationship-config.ts` automáticamente
- Modifica los recuerdos en el config

#### Carta Final
**Archivo:** `/components/stages/Stage4Finale.tsx`
- Ya usa `relationship-config.ts` automáticamente
- Modifica los párrafos en el config

### 🖼️ Agregar/Cambiar Imágenes

**Carpeta:** `/public/sprites/`

1. Copia tu imagen aquí
2. Usa en componentes: `<img src="/sprites/tu-imagen.png" />`

**Imágenes actuales y dónde se usan:**

| Imagen | Usado en |
|--------|----------|
| `natsu.png` | Intro, referencias |
| `happy.png` | Carta final |
| `dumbledore.png` | Etapa Ravenclaw |
| `chess-master.png` | Etapa de ajedrez |
| `math-wizard.png` | Etapa de matemáticas |
| `ravenclaw-crest.png` | Etapa Ravenclaw |
| `sorting-hat.png` | Etapa Ravenclaw |
| `dirac-equation.jpg` | Etapa de matemáticas |
| `portada.jpg` | Fondo opciones |

### 🎨 Cambiar Colores

Busca y reemplaza estas clases en cualquier archivo `.tsx`:

- `text-[#d4af37]` → Texto dorado
- `bg-[#d4af37]` → Fondo dorado
- `text-pink-500` → Texto rosa
- `bg-pink-500` → Fondo rosa
- `border-[#d4af37]` → Borde dorado

### ➕ Agregar Nueva Etapa

1. Crea: `/components/stages/StageNueva.tsx`
2. Importa en: `/app/page.tsx`
3. Agrega al flujo en: `/app/page.tsx` línea ~31-38

---

## 🔍 Buscar Algo Específico

### "¿Dónde está el texto...?"

| Texto | Ubicación |
|-------|-----------|
| "Tres Meses de Amor" | `relationship-config.ts` → `intro.title` |
| "Mi Ali" | `relationship-config.ts` → `finaleLetter.paragraphs` |
| Estadísticas (90 días, etc) | `relationship-config.ts` → `stats` |
| Preguntas del quiz | `Stage35Questions.tsx` → `questions` |
| Recuerdos en timeline | `relationship-config.ts` → `timeline.memories` |

### "¿Dónde está el componente...?"

| Elemento Visual | Archivo |
|-----------------|---------|
| Botón "INICIEMOS" | `Stage0Intro.tsx` línea ~38 |
| Sombrero Seleccionador | `Stage1Ravenclaw.tsx` |
| Tablero de ajedrez | `Stage2Chess.tsx` |
| Ecuaciones matemáticas | `Stage3Math.tsx` |
| Tarjetas de preguntas | `Stage35Questions.tsx` |
| Línea de tiempo con íconos | `MemoryTimeline.tsx` |
| Corazón animado | `Stage4Finale.tsx` línea ~71 |
| Confetti | Varios archivos, busca `confetti(` |

---

## 📋 Checklist de Archivos a Modificar

Para una personalización completa, modifica estos archivos en orden:

1. ✅ `/lib/relationship-config.ts` (¡EL MÁS IMPORTANTE!)
2. ✅ `/components/stages/Stage35Questions.tsx` (preguntas personalizadas)
3. ✅ `/public/sprites/` (agregar tus fotos)
4. 🔧 `/components/stages/Stage1Ravenclaw.tsx` (opcional)
5. 🔧 `/components/stages/Stage2Chess.tsx` (opcional)
6. 🔧 `/components/stages/Stage3Math.tsx` (opcional)

---

## 🎯 Modificaciones Comunes

### Cambiar duración de la relación

```typescript
// En: /lib/relationship-config.ts

stats: {
  days: 90,       // ← Cambia este número
  hours: 2160,    // ← días × 24
  minutes: 129600, // ← horas × 60
},
```

### Agregar más recuerdos a la línea de tiempo

```typescript
// En: /lib/relationship-config.ts → timeline.memories

{
  date: 'Tu Fecha',
  title: 'Título del Recuerdo',
  description: 'Descripción del momento',
  icon: 'heart', // o 'sparkles', 'star', 'zap'
},
```

### Cambiar número de preguntas

```typescript
// En: /components/stages/Stage35Questions.tsx
// Simplemente agrega más objetos al array 'questions'
```

---

## 💡 Tips Pro

1. **Ctrl+F (Cmd+F)** es tu amigo - busca texto para encontrar dónde está
2. Modifica un archivo a la vez y prueba
3. Guarda copias de seguridad antes de cambios grandes
4. Lee los comentarios en el código (líneas que empiezan con `//`)

---

## 🆘 ¿Perdido?

Si no encuentras algo:

1. Busca el texto exacto con Ctrl+F en todo el proyecto
2. Revisa `/lib/relationship-config.ts` primero
3. Consulta `CUSTOMIZATION-GUIDE.md` para más detalles
4. La mayoría de textos importantes están en el config

---

¡Feliz personalización! 💝
