import { Button } from '@/components/ui/button';
import { FaGoogle } from 'react-icons/fa';

const Page = () => {
  return (
    <div className='text-center mt-auto mb-auto'>
      <h2 className='text-5xl mb-2'>Welcome to AIUB Parody</h2>
      <p className='mb-3'>An Uofficial AIUB Portal for Students of AIUB</p>
      <Button>
        <FaGoogle className='mr-2 h-4 w-4' />
        Sign in with Google
      </Button>
    </div>
  );
};

export default Page;
