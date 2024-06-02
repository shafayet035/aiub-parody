'use client';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ModeToggle } from './ModeToggle';
import { UserButton, SignInButton, useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const { isSignedIn } = useAuth();
  const pathname = usePathname();

  return (
    <div className={cn('pb-12', className)}>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <div className='flex justify-between items-center mb-3 text-right'>
            <ModeToggle />
            <UserButton afterSignOutUrl='/sign-in' />
          </div>
        </div>
        <div className='px-3 py-2'>
          <h2 className='mb-5 px-4 text-lg font-semibold tracking-tight'>
            AIUB Parody
          </h2>
          <div className='space-y-1'>
            <Link href='/'>
              <Button
                variant={pathname === '/' ? 'secondary' : 'ghost'}
                className='w-full justify-start'
              >
                Feed
              </Button>
            </Link>
            <Link href='/notes'>
              <Button
                variant={pathname === '/notes' ? 'secondary' : 'ghost'}
                className='w-full justify-start'
              >
                Notes
              </Button>
            </Link>
            <Link href='/upload-notes'>
              <Button
                variant={pathname === '/upload-notes' ? 'secondary' : 'ghost'}
                className='w-full justify-start'
              >
                Upload notes
              </Button>
            </Link>
            <Link href='/profile'>
              <Button
                variant={pathname === '/profile' ? 'secondary' : 'ghost'}
                className='w-full justify-start'
              >
                Profile
              </Button>
            </Link>
            {!isSignedIn && (
              <Button variant='ghost' className='w-full justify-start'>
                <SignInButton />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
