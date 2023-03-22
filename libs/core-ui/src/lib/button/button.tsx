import { ComponentPropsWithoutRef, forwardRef, LegacyRef } from 'react';
import styles from './button.module.scss';

/* eslint-disable-next-line */

export type ButtonComponentProps = ComponentPropsWithoutRef<'a'> &
  ComponentPropsWithoutRef<'button'> & {
    color?: 'primary' | 'default' | 'info' | 'success' | 'warning' | 'error'| 'secondary';
    size?: 'large' | 'medium' | 'small';
    element?: 'button' | 'link';
    variant?: 'contain' | 'outline' | 'text' | 'soft';
    disable? :boolean
  };

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonComponentProps
>(function (
  {
    children,
    color,
    className,
    size = 'medium',
    element = 'button',
    variant = 'contain',
    disable = false,
    ...elProps
  },
  ref
) {
  const classes = `${styles['btn']} 
  ${variant ? `${styles[variant]}` : ''} 
  ${styles[size]} 
  ${color ? styles[color] : ''} 
  ${className ? className : ''} button`;

  return element === 'button' ? (
    <button
      disabled={disable}
      ref={ref as LegacyRef<HTMLButtonElement>}
      className={classes}
      {...elProps}
    >
      {children}
    </button>
  ) : (
    <a
      ref={ref as LegacyRef<HTMLAnchorElement>}
      className={classes}
      {...elProps}
    >
      {children}
    </a>
  );
});

export default Button;
