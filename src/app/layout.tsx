import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';
import { cn } from '@/lib';
import './globals.css';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});

const cascadiaMono = localFont({
  src: '../../public/fonts/CascadiaMono.woff2',
  variable: '--font-cascadia-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chresendo | 최정원 블로그',
  description: '개발 중에 겪은 이슈와 기억하고 싶은 내용을 기록하고 정리하는 공간',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ko" className={cn('antialiased', pretendard.variable, cascadiaMono.variable)} suppressHydrationWarning>
      <body className="bg-background text-foreground max-h-screen min-h-svh overflow-auto">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
