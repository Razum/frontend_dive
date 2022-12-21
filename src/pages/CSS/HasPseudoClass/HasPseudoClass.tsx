import React from 'react';
import styles from '@/pages/CSS/HasPseudoClass/HasPseudoClass.module.css';

const HasPseudoClass = () => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.box} />
      <div className={styles.box}><span>span</span></div>
      <div className={styles.box}>
        <span>span</span>
        <span>span</span>
        <span>span</span>
      </div>
      <div className={styles.box} />
    </div>
    <h1 className={styles.h1}>Heading 1</h1>
    <h2 className={styles.h2}>Heading 2</h2>
  </>
);

export default HasPseudoClass;
