import React from 'react';
import styles from './App.module.scss';
import './styles/main.scss';
import { config } from './config';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import ImagesGallery from './components/ImagesGallery/ImagesGallery';

export default function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.content}>
        <div className={styles.menuContainer}>
          <Menu items={config.menuItems} />
        </div>
        <div className={styles.layout}>
          <div className={styles.mainLayoutContainer}>
            <ImagesGallery />
          </div>
          <div className={styles.footerContainer}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
