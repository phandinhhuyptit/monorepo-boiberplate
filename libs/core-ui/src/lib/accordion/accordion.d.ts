import { PropsWithChildren } from 'react';
export interface AccordionProps extends PropsWithChildren {
  /**
   *  Can select multiple value in accordion
   */
  multiple?: boolean;
  /**
   *  Name of accordion
   */
  name: string;
}
