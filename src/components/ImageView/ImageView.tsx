import React from 'react';
import { isDesktopApp } from '../../utils/appUtils';
import styles from './ImageView.module.scss';

export type ImageItem = {
  id: string;
  title: string;
  description: string;
  url: string;
};

export default function MainLayout({
  item,
  hideImg,
  onImageClick,
}: {
  item: ImageItem;
  hideImg: boolean;
  onImageClick: () => void;
}) {
  const handleImageClick = () => {
    onImageClick();
  };

  const displayDescription = isDesktopApp() || hideImg;

  return (
    <div className={styles.imageItem} onClick={handleImageClick}>
      <img
        src={item.url}
        alt={item.title}
        className={`${hideImg ? 'hide-img' : ''}`}
      />
      <div className={styles.imageTextBox}>
        {!hideImg && <div className={styles.imageItemTitle}>{item.title}</div>}
        {displayDescription && (
          <div className={styles.imageItemDescription}>{item.description}</div>
        )}
      </div>
    </div>
  );
}
