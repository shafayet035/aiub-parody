'use client';

import { useState } from 'react';
import { SearchSelect } from '@/components/SearchSelect';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RocketIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Subjects = [
  {
    value: 'differential calculus & co-ordinate geometry',
    label: 'DIFFERENTIAL CALCULUS & CO-ORDINATE GEOMETRY',
  },
  {
    value: 'physics 1',
    label: 'PHYSICS 1',
  },
];

const UploadNotes = () => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');

  return (
    <div className='flex flex-col gap-3'>
      <SearchSelect options={Subjects} setValue={setValue} value={value} />
      <Input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type='text'
        placeholder='Note URL (Google Drive or Similar cloud drive link)'
      />
      <Alert className='border-2 border-slate-800 caret-teal-100 mb-1 opacity-50 cursor-not-allowed'>
        <RocketIcon className='h-4' />
        <AlertDescription>Fil Upload Coming soon....</AlertDescription>
      </Alert>
      <Button variant='secondary'>Upload</Button>
    </div>
  );
};

export default UploadNotes;
