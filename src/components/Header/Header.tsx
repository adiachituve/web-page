import React from 'react';
import SocketIndicator from '../SocketIndicator/SocketIndicator';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      Header
      <div className={styles.headerSocketIndicator}>
        <SocketIndicator />
      </div>
    </div>
  );
}
