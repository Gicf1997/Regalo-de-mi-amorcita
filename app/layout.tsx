import './globals.css';
import type { Metadata } from 'next';
import { Cinzel, Montserrat, Noto_Sans_Math } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '600', '700']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
});

const notoSansMath = Noto_Sans_Math({
  subsets: ['math'],
  variable: '--font-math',
  weight: '400'
});

export const metadata: Metadata = {
  title: 'Love & Physics',
  description: 'Una aventura romántica a través de acertijos, matemáticas y física cuántica',
  icons: {
    icon: '/sprites/portada.jpg',
  },
  openGraph: {
    title: 'Love & Physics',
    description: 'Una aventura romántica a través de acertijos, matemáticas y física cuántica',
    images: [
      {
        url: '/sprites/portada.jpg',
        width: 800,
        height: 800,
        alt: 'Love & Physics',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Love & Physics',
    description: 'Una aventura romántica a través de acertijos, matemáticas y física cuántica',
    images: [
      {
        url: '/sprites/portada.jpg',
        alt: 'Love & Physics',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${cinzel.variable} ${montserrat.variable} ${notoSansMath.variable} font-montserrat`}>{children}</body>
    </html>
  );
}
