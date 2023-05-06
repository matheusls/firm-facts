import { ReactNode } from 'react';

import styles from './styles.module.scss';

export type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  variant?: 'default' | 'icon';
};

export const Button = ({
  children,
  disabled = false,
  icon,
  variant = 'default',
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      disabled={disabled}
    >
      {icon && (
        <span className={styles.buttonIcon}>
          {icon}
        </span>
      )}
      <span>
        {children}
      </span>
    </button>
  );
};
