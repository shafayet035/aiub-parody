'use client';

import React, { useState } from 'react';
import { SearchSelect } from '@/components/SearchSelect';
import { Input } from '@/components/ui/input';

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

const Notes = () => {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');

  console.log(value);

  return (
    <div className='flex flex-col gap-3'>
      <SearchSelect options={Subjects} setValue={setValue} value={value} />
      <Input
        type='text'
        placeholder='Search for notes'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Notes;
