import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-providers';
import { ModeToggle } from '@/components/ModeToggle';
import { ClerkProvider } from '@clerk/nextjs';
import { Sidebar } from '@/components/ui/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AIUB Parody',
  description: 'AIUB Parody is a student project for educational purposes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ClerkProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            <div className='grid grid-cols-5 max-w-[1200px] mx-auto'>
              <Sidebar className='col-span-1' />
              <div className='col-span-3'>{children}</div>
              <div className='col-span-1'>Another sidebar</div>
            </div>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
