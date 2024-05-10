'use client';

import * as style from './darkModeBtn.css';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Button from '../button/button';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';

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
        size='circle'
      >
        {mounted && (
          resolvedTheme === 'light' ? <NightsStayIcon fontSize='small' /> : <WbSunnyIcon fontSize='small' />
        )}
      </Button>
    </div>
  );
};

export default DarkModeBtn;