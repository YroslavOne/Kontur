import { Fancybox } from '@fancyapps/ui';
import React, { useEffect } from 'react';
import styles from "./Gallery.module.css";

import Column from '../../../public/image/gallery/Column.png';
import AspectRatioBlock from '../../../public/image/gallery/AspectRatioBlock.png';
import AspectRatioBlock1 from '../../../public/image/gallery/AspectRatioBlock1.png';
import AspectRatioBlock2 from '../../../public/image/gallery/AspectRatioBlock2.png';
import AspectRatioBlock3 from '../../../public/image/gallery/AspectRatioBlock3.png';

const images = [
  { src: Column, alt: 'Column', large: true },
  { src: AspectRatioBlock, alt: 'AspectRatioBlock' },
  { src: AspectRatioBlock1, alt: 'AspectRatioBlock1' },
  { src: AspectRatioBlock2, alt: 'AspectRatioBlock2' },
  { src: AspectRatioBlock3, alt: 'AspectRatioBlock3' }
];

const Gallery = () => {
    useEffect(() => {
      Fancybox.bind('[data-fancybox]', {});
  
      return () => {
        Fancybox.destroy();
      };
    }, []);
  
    return (
      <div className={styles['gridContainer']}>
        {images.map((image, index) => (
          <a key={index} data-fancybox="gallery" href={image.src} data-caption={image.alt} className={image.large ? styles['large'] : styles['small']}>
            <img src={image.src} alt={image.alt} className={styles['image']} />
          </a>
        ))}
      </div>
    );
};

export default Gallery;
