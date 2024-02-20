import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-providers';
import { ClerkProvider } from '@clerk/nextjs';
import { Sidebar } from '@/components/Sidebar';

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
            <div className='grid grid-cols-4 max-w-[800px] mx-auto w-full gap-1'>
              <main className='col-span-3 flex py-6 min-h-screen flex-col border-x-2 px-2'>
                {children}
              </main>
              <Sidebar className='col-span-1' />
            </div>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
