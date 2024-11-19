import React from 'react';
import Box from '@/shared/atom/box/box';
import { Typo } from '@/shared/atom/typo/typo';
import { container, svgClass } from './footer.css';


export function Footer() {
  return (
    <div className={container}>
      <svg
        className={svgClass}
        width="100%"
        height="100%"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,160L48,138.7C96,117,192,75,288,74.7C384,75,480,117,576,138.7C672,160,768,160,864,165.3C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <Box justifyContent="spaceBetween" margin="auto" padding="auto">
        <Typo size="p1" margin="auto" padding="auto" href="/">
          © Jlog, Built with NextJS and Vanilla-Extract
        </Typo>
      </Box>
    </div>
  );
};
