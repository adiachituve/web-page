import React from 'react';
import styles from './Menu.module.scss';

export type MenuItem = {
  id: string;
  title: string;
  icon: JSX.Element;
};

export default function Menu({ items }: { items: MenuItem[] }) {
  return (
    <div className={styles.menu}>
      {items.map((item) => (
        <div key={item.id} className={styles.menuItem}>
          {item.icon}
          <div className={styles.menuItemTitle}>{item.title}</div>
        </div>
      ))}
    </div>
  );
}
