'use client';

import * as style from './darkModeBtn.css';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className={style.container} />;

  return (
    <div className={style.container}>
      <button
        className={style.button}
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
        aria-label="DarkModeBtn"
      >
        버튼
      </button>
    </div>
  );
};

export default DarkModeBtn;