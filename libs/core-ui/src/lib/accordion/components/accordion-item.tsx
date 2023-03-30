import { ReactNode, PropsWithChildren, useEffect } from 'react';
import styles from './accordion-item.module.scss';
import clsx from 'clsx';

interface AccordionItemProps extends PropsWithChildren {
  header?: ReactNode;
  open?: boolean;
  id: string;
}

const AccordionItem = ({
  header,
  children,
  open = false,
  id,
}: AccordionItemProps) => {
  return (
    <div
      className={clsx([
        styles['accordion-item'],
        open && styles['open'],
        'accordion-item',
      ])}
    >
      {header}
      <div className={styles['content']}>{children}</div>
    </div>
  );
};

export default AccordionItem;
