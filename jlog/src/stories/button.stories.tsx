import React from 'react';
import Button from '@/components/atom/button/button';

export default {
  title: 'components/Button',
  component: Button
};

export const BaseButton = () => {
  return <Button>BUTTON</Button>;
};

BaseButton.story = {
  name: 'Default'
};

export const ColorPaletteButton = () => {
  return (
    <div>
      <Button color='black'>color</Button>
      <Button color='white'>color</Button>
      <Button color='gray-100'>color</Button>
      <Button color='gray-300'>color</Button>
      <Button color='gray-500'>color</Button>
      <Button color='gray-700'>color</Button>
      <Button color='gray-800'>color</Button>
      <Button color='gray-900'>color</Button>
    </div>
  );
};

export const SizePaletteButton = () => {
  return (
    <div>
      <Button color='gray-700' size="small" margin='small'>size</Button>
      <Button color='gray-700' size="medium" margin='small'>size</Button>
      <Button color='gray-700' size="large" margin='small'>size</Button>
      <Button color='gray-700' size="fit" margin='small'>size</Button>
      <Button color='gray-700' size="circle" margin='small'>size</Button>
    </div>
  )
};

// export const TertiaryButton = () => {
//   return <Button theme="tertiary">TERTIARY</Button>;
// };