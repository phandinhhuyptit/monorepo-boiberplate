import { createContext, Dispatch, useContext, SetStateAction } from 'react';
export interface AccordionContextProps {
  multipleSelected?: boolean;
  onSetMultipleSelected?: (isMultiSelected: boolean) => void;
  name: string | undefined;
}

const AccordionContext = createContext<AccordionContextProps>({
  multipleSelected: false,
  onSetMultipleSelected: undefined,
  name: undefined,
});

export const AccordionContextProvider = AccordionContext.Provider;

export function useAccordionContext(): AccordionContextProps {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error('useTabsContext must be must under TabsContextProvider');
  }
  return context;
}
