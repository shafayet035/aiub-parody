import { SignInButton, UserButton, auth } from '@clerk/nextjs';

export default function Home() {
  console.log(auth());
  return (
    <main className='flex justify-center items-center min-h-screen flex-col'>
      <UserButton afterSignOutUrl='/' />
      <SignInButton />
    </main>
  );
}
