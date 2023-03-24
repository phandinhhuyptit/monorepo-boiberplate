import { HTMLAttributes, ReactNode, forwardRef, LegacyRef } from 'react';
import styles from './input.module.scss';
import clsx from 'clsx';

/* eslint-disable-next-line */
export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  variant?: 'outlined' | 'filled' | 'standard';
  inputSize?: 'small' | 'default' | 'large';
  iconPrefix?: ReactNode;
  iconSuffix?: ReactNode;
  error?: boolean;
  color: 'primary' | 'secondary';
  disable?: boolean;
  label: string;
}

export const Input = forwardRef(
  (
    {
      variant = 'outlined',
      inputSize = 'default',
      error = false,
      color = 'primary',
      iconPrefix = <div></div>,
      iconSuffix = <div></div>,
      label = 'Hello Fen',
      ...props
    }: InputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const classes = clsx([
      styles['input'],
      iconPrefix && styles['prefix'],
      iconSuffix && styles['subfix'],
    ]);
    const classesInput = clsx([
      error && styles['error'],
      iconPrefix && styles['prefix'],
    ]);
    return (
      <label htmlFor={label} className={classes}>
        <div className={styles['icon-prefix']}>$</div>
        <input
          className={classesInput}
          ref={ref}
          type="text"
          id={label}
          placeholder="&nbsp;"
          {...props}
        />
        <span className={styles['label']}>{label}</span>
        <div className={styles['icon-subfix']}>$</div>
        <fieldset className=" ">
          <legend>
            <span>{label}</span>
          </legend>
        </fieldset>
      </label>
    );
  }
);

export default Input;
