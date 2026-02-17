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
  title: 'Protocolo 14F - The Queen & The Dragon',
  description: 'Una experiencia interactiva romántica',
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
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
