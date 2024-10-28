import React from 'react';
import Card from '@/components/atom/card/card';


export default {
  title: 'components/Card',
  component: Card
}

export const BaseCard = () => {
  return <Card
    title='제목 : 기본 카드'
    description='설명하는 글입니다. 설명하는 글입니다. 설명하는 글입니다. 설명하는 글입니다. 설명하는 글입니다. 설명하는 글입니다. '
    date={new Date('2024-10-28')}
    id={1}
  ></Card>;
};

BaseCard.story = {
  name: 'Default'
};

export const ColorPaletteCard = () => {
  return (
    <div>
      <Card
        className={`
        backgroundColor: '#f0f0f0',
        padding: '16px',
        border: '1px solid #ccc',
        borderRadius: '8px'`}
        title='제목 : 검정색 카드'
        description='설명하는 글입니다. 설명하는 글입니다. 설명하는 글입니다. 설명하는 글입니다. 설명하는 글입니다. 설명하는 글입니다. '
        date={new Date('2024-10-28')}
        id={1}
      >
      </Card>
      <Card 
        className={`
        backgroundColor: '#f0f0f0',
        padding: '16px',
        border: '1px solid #ccc',
        borderRadius: '8px'`}
        title='제목 : 검정색 카드'
        description='설명하는 글입니다. 설명하는 글입니다. 설명하는 글입니다. 설명하는 글입니다. 설명하는 글입니다. 설명하는 글입니다. '
        date={new Date('2024-10-28')}
        id={1}
      >
      </Card>
      {/* <Card color='gray-100'></Card>
      <Card color='gray-300'></Card>
      <Card color='gray-500'></Card>
      <Card color='gray-700'></Card>
      <Card color='gray-800'></Card>
      <Card color='gray-900'></Card> */}
    </div>
  );
};

export const SizePaletteButton = () => {
  return (
    <div>
      {/* <Button color='gray-700' size="small" margin='small'>small</Button>
      <Button color='gray-700' size="medium" margin='small'>medium</Button>
      <Button color='gray-700' size="large" margin='small'>large</Button>
      <Button color='gray-700' size="fit" margin='small'>fit</Button>
      <Button color='gray-700' size="circle" margin='small'>circle</Button> */}
    </div>
  )
};
