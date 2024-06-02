'use client';

import React, { useState } from 'react';

const Notes = () => {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');

  console.log(value);

  return <div className='flex flex-col gap-3'></div>;
};

export default Notes;
