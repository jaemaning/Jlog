'use client';

import * as style from './dark-mode-button.css';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/shared/atom/button';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return (
    <div className={style.loadingContatiner}>

    </div>
  );

  return (
    <div className={style.container}>
      <Button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label="DarkModeBtn"
        size='circle'
      >
        {mounted && (
          theme === 'light' ? <NightsStayIcon fontSize='small' /> : <WbSunnyIcon fontSize='small' />
        )}
      </Button>
    </div>
  );
};

export default DarkModeBtn;