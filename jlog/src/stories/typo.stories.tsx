import React from 'react';
import Typo from '@/components/atom/typo/typo';


export default {
  title: 'components/Typo',
  component: Typo
};

export const BaseTypo = () => {
  return <Typo>Typo</Typo>;
};

BaseTypo.story = {
  name: 'Default'
};

export const ColorPaletteTypo = () => {
  return (
    <div>
        <Typo size='h1' color='black' margin='small'>h1-black</Typo>
        <Typo size='h1' color='white' margin='small'>h1-white</Typo>
        <Typo size='h1' color='gray100' margin='small'>h1-gray100</Typo>
        <Typo size='h1' color='gray300' margin='small'>h1-gray300</Typo>
        <Typo size='h1' color='gray500' margin='small'>h1-gray500</Typo>
        <Typo size='h1' color='gray700' margin='small'>h1-gray700</Typo>
        <Typo size='h1' color='gray800' margin='small'>h1-gray800</Typo>
        <Typo size='h1' color='gray900' margin='small'>h1-gray900</Typo>
        <Typo size='h1' color='orangeBright' margin='small'>h1-orangeBright</Typo>
        <Typo size='h1' color='origin' margin='small'>h1-origin</Typo>

    </div>
  );
};

export const SizePaletteTypo = () => {
  return (
    <div>
        <Typo size='h1' color='gray700' margin='small'>h1</Typo>
        <Typo size='h2' color='gray700' margin='small'>h2</Typo>
        <Typo size='h3' color='gray700' margin='small'>h3</Typo>
        <Typo size='p1' color='gray700' margin='small'>p1</Typo>
        <Typo size='p2' color='gray700' margin='small'>p2</Typo>
        <Typo size='p3' color='gray700' margin='small'>p3</Typo>
        <Typo size='ha' color='gray700' margin='small'>ha</Typo>
        <Typo size='a' color='gray700' margin='small'>a</Typo>
    </div>
  )
};
