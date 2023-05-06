import { ReactNode } from 'react';

import styles from './styles.module.scss';

export type CardProps = {
  children: ReactNode;
  variant?: 'default' | 'border';
};

export const Card = ({ children, variant = 'default' }: CardProps) => {
  return <div className={`${styles.card} ${styles[variant]}`}>{children}</div>;
};
