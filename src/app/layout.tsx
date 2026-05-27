import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import UserSetup from '@/components/UserSetup';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ECA Study Guide — Exam Prep',
  description: 'Interactive study guide for Emet Classical Academy final exams. Flashcards, quizzes, and notes for all subjects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        <UserSetup />
        {children}
      </body>
    </html>
  );
}
