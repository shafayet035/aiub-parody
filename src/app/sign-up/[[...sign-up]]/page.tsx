import { SignUp, SignInButton } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <SignUp />
    </div>
  );
}
