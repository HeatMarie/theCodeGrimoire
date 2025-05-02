import type React from 'react';
import type { Metadata } from 'next';
import { Inter, Cinzel, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-fantasy' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: '400' });

export const metadata: Metadata = {
  title: 'The Enchanted Codex',
  description: 'A magical journey through software development concepts',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.variable} ${cinzel.variable} ${cormorant.variable} font-sans`}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
