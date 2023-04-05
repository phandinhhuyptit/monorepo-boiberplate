import { HTMLAttributes, ReactNode, forwardRef, LegacyRef } from 'react';
import styles from './input.module.scss';
import clsx from 'clsx';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  variant?: 'outlined' | 'filled' | 'standard';
  inputSize?: 'small' | 'default' | 'large';
  iconPrefix?: ReactNode;
  iconSuffix?: ReactNode;
  error?: boolean;
  color?: 'primary' | 'secondary';
  disable?: boolean;
  label: string;
  size?: 'medium' | 'small';
}

export const Input = forwardRef(
  (
    {
      variant = 'outlined',
      inputSize = 'default',
      error = false,
      color = 'primary',
      iconPrefix,
      iconSuffix,
      label = 'Hello Fen',
      size = 'small',
      disable,
      ...props
    }: InputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const classes = clsx([
      styles['input'],
      iconPrefix && styles['prefix'],
      iconSuffix && styles['subfix'],
      size && styles[size],
    ]);
    const classesInput = clsx([error && styles['error']]);
    return (
      <label htmlFor={label} className={classes}>
        {iconPrefix && (
          <div data-testid="icon-prefix" className={styles['icon-prefix']}>
            {iconPrefix}
          </div>
        )}
        <input
          aria-label={label}
          className={classesInput}
          ref={ref}
          type="text"
          id={label}
          placeholder="&nbsp;"
          disabled={disable}
          {...props}
        />
        <span className={styles['label']}>{label}</span>
        {iconSuffix && (
          <div data-testid="icon-subfix" className={styles['icon-subfix']}>
            {iconSuffix}
          </div>
        )}

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
