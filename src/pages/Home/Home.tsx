import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/pages/Home/Home.module.css';

const Home = () => (
  <div>
    <h2>CSS</h2>
    <div className={styles.links}>
      <Link to="/css/border-image">Border-image</Link>
      <Link to="/css/object-position">Object-position</Link>
    </div>
    <h2>JS</h2>
  </div>
);

export default Home;
