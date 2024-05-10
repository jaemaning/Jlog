'use client';

import * as style from './darkModeBtn.css';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Button from '../button/button';

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={style.container}>
      <Button
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
        aria-label="DarkModeBtn"
        size='small'
        color='gray-300'
      >
        버튼
      </Button>
    </div>
  );
};

export default DarkModeBtn;