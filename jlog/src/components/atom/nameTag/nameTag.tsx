'use client'

import * as styles from './nameTag.css'
import React, { useState } from 'react';
import Typo from '../typo/typo';

const NameTag = () => {
  const [rotated, setRotated] = useState(false);

  const handleMouseEnter = () => {
    if (!rotated) {
      setRotated(true);
    }
  };

  const handleMouseLeave = () => {
    setRotated(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`${styles.card} ${rotated ? styles.rotateCard : ''}`}>
          <div className={`${styles.cardInner} ${styles.cardFront}`} style={{ backgroundImage: 'url(/images/k6r.png)' }}>
            <div className={styles.photoFrame}></div>
          </div>
          <div className={`${styles.cardInner} ${styles.cardBack}`}>
            <div>
              <Typo size='h2' margin='large'>Kim Jaeman</Typo>
              <Typo size='p1' margin='small'>Thank you for visit</Typo>
              <Typo size='p1' margin='small'>my Jlog</Typo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameTag