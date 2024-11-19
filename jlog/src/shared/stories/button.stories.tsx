import React from 'react';
import { Button } from '@/shared/atom/button/button';

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
      <Button color='black'>black</Button>
      <Button color='white'>white</Button>
      <Button color='gray-100'>gray-100</Button>
      <Button color='gray-300'>gray-300</Button>
      <Button color='gray-500'>gray-500</Button>
      <Button color='gray-700'>gray-700</Button>
      <Button color='gray-800'>gray-800</Button>
      <Button color='gray-900'>gray-900</Button>
    </div>
  );
};

export const SizePaletteButton = () => {
  return (
    <div>
      <Button color='gray-700' size="small" margin='small'>small</Button>
      <Button color='gray-700' size="medium" margin='small'>medium</Button>
      <Button color='gray-700' size="large" margin='small'>large</Button>
      <Button color='gray-700' size="fit" margin='small'>fit</Button>
      <Button color='gray-700' size="circle" margin='small'>circle</Button>
    </div>
  )
};
