import React, { FC } from 'react';
import styles from './Image.module.css';

export interface ImageProps {}

export const Image: FC<ImageProps> = () => (
  <div className={styles.Image} data-testid="Image">
    Image Component
  </div>
);

export default Image;
