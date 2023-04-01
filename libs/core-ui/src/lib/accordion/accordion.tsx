import { FC } from 'react';
import styles from './accordion.module.scss';
import { useState, useRef } from 'react';
import { AccordionContextProvider } from './accordion.context';
import AccordionHeader from './components/accordion-header';
import AccordionItem from './components/accordion-item';
import { AccordionProps } from './accordion.d';

export const AccordionRoot: FC<AccordionProps> = ({
  multiple = false,
  children,
  name,
}) => {
  const [multipleSelected, setMultipleSelected] = useState<boolean>(multiple);

  return (
    <AccordionContextProvider
      value={{ multipleSelected, setMultipleSelected, name }}
    >
      <div className={styles['accordion']}>{children}</div>
    </AccordionContextProvider>
  );
};

const Accordion = {
  Header: AccordionHeader,
  Item: AccordionItem,
  Root: AccordionRoot,
};
export { Accordion };
