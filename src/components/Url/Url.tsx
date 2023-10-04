import React, { FC } from 'react';
import styles from './Url.module.css';

export interface UrlProps {}

export const Url: FC<UrlProps> = () => (
  <div className={styles.Url} data-testid="Url">
    Url Component
  </div>
);

export default Url;
