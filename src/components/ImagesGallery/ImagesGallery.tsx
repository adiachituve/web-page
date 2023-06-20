import React, { useEffect, useState } from 'react';
import { isDesktopApp } from '../../utils/appUtils';
import ImageView, { ImageItem } from '../ImageView/ImageView';
import styles from './ImagesGallery.module.scss';

export default function ImagesGallery() {
  // This state is used to store the images fetched from the API
  const [imageItems, setImageItems] = useState<ImageItem[]>();
  // This state is used to hide the image on mobile devices
  const [hideImageIndex, setHideImageIndex] = useState<number>(-1);

  useEffect(() => {
    fetch('https://api.slingacademy.com/v1/sample-data/photos')
      .then((response) => response.json())
      .then((json) => {
        setImageItems(json.photos.slice(0, 6));
      });
  }, []);

  const handleImageClick = (imgIndexToHide: number) => {
    if (isDesktopApp()) {
      return;
    }
    // If the image is already hidden, show it again
    setHideImageIndex((prevHideImageIndex) =>
      prevHideImageIndex === imgIndexToHide ? -1 : imgIndexToHide,
    );
  };

  return (
    <div className={styles.images}>
      {imageItems?.map((item, index) => (
        <ImageView
          key={item.id}
          item={item}
          hideImg={index === hideImageIndex}
          onImageClick={() => handleImageClick(index)}
        />
      ))}
    </div>
  );
}
