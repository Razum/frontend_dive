import React from 'react';
import { Link, Route } from 'react-router-dom';
import routes from '@/routes';
import styles from '@/pages/Home/Home.module.css';

const Home = () => (
  <div>
    <h2>CSS</h2>
    <div className={styles.links}>
      {
            routes.css.map(({ url, title }) => <Link key={url} to={url}>{title}</Link>)
        }
    </div>
    <h2>JS</h2>
  </div>
);

export default Home;
