'use client';

import { UserButton, SignInButton, useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const { isSignedIn } = useAuth();
  const pathname = usePathname();

  return (
    <div className='pb-12'>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <div className='flex justify-between items-center mb-3 text-right'>
            {/* <ModeToggle /> */}
            <UserButton afterSignOutUrl='/sign-in' />
          </div>
        </div>
        <div className='px-3 py-2'>
          <h2 className='mb-5 px-4 text-lg font-semibold tracking-tight'>
            AIUB Parody
          </h2>
          <div className='flex flex-col gap-2'>
            <Link href='/'>
              <button
                className={clsx('btn w-full justify-start', {
                  'btn-neutral': pathname === '/',
                })}
              >
                Feed
              </button>
            </Link>
            <Link href='/notes'>
              <button
                className={clsx('btn w-full justify-start', {
                  'btn-neutral': pathname === '/notes',
                })}
              >
                Notes
              </button>
            </Link>
            <Link href='/upload-notes'>
              <button
                className={clsx('btn w-full justify-start', {
                  'btn-neutral': pathname === '/upload-notes',
                })}
              >
                Upload notes
              </button>
            </Link>
            <Link href='/profile'>
              <button
                className={clsx('btn w-full justify-start', {
                  'btn-neutral': pathname === '/profile',
                })}
              >
                Profile
              </button>
            </Link>
            {!isSignedIn && (
              <button
                className={clsx('btn w-full justify-start', {
                  'btn-neutral': pathname === '/sign-in',
                })}
              >
                <SignInButton />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
