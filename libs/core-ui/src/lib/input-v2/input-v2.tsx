import { forwardRef, InputHTMLAttributes, LegacyRef, ReactNode } from 'react';
import Icon from '../icon/icon';
import styles from './input-v2.module.scss';
import clsx from 'clsx';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
  inputSize?: 'small' | 'default' | 'large';
  iconPrefix?: ReactNode;
  iconSuffix?: ReactNode;
  error?: boolean;
}

export const Input = forwardRef(
  (
    {
      variant = 'primary',
      inputSize = 'default',
      iconPrefix,
      iconSuffix,
      className,
      value,
      error,
      ...inputProps
    }: InputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const classes = clsx([
      styles['container'],
      iconPrefix && styles['prefix'],
      (iconSuffix || error) && styles['suffix'],
      inputProps.disabled && styles['disabled'],
      error && styles['error'],
      styles[inputSize],
      styles[variant],
      className,
    ]);

    return (
      <div className={classes}>
        <div className={styles['icon-prefix']}>{iconPrefix}</div>
        <input
          name="input"
          value={value}
          ref={ref}
          autoComplete="off"
          {...inputProps}
          className={`${styles['input']} input`}
        />
        <div className={styles['icon-suffix']}>
          {error && <Icon name="ic-error" style={{ width: 18 }} />}
          {iconSuffix}
        </div>
      </div>
    );
  }
);

export default Input;
