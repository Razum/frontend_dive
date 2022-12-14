import React from 'react';
import styles from '@/pages/CSS/ObjectPosition/ObjectPosition.module.css';
import image from '@/assets/images/gosling.jpeg';

const ObjectPosition = () => (
  <>
    <h3>Object Position</h3>

    <div className={styles.box}>
      <img src={image} alt="image" className={styles.image} />
    </div>
  </>
);

export default ObjectPosition;
