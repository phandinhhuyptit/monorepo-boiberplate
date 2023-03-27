import Button, { ButtonComponentProps } from '../button/button';
import styles from './button-outline.module.scss';

/* eslint-disable-next-line */
export interface ButtonOutlineProps extends ButtonComponentProps {}

export function ButtonOutline({
  children,
  className,
  ...btnProps
}: ButtonOutlineProps) {
  const classes = `${styles['outline']} ${className ? className : ''}`;

  return (
    <Button className={classes} {...btnProps}>
      <span>{children}</span>
    </Button>
  );
}

export default ButtonOutline;
