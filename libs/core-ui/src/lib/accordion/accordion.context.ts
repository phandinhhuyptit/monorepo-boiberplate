import { createContext, Dispatch, useContext, SetStateAction } from 'react';
export interface AccordionContextProps {
  multipleSelected?: boolean;
  setMultipleSelected: React.Dispatch<React.SetStateAction<boolean>> | null;
  name: string | undefined;
}

const AccordionContext = createContext<AccordionContextProps>({
  multipleSelected: false,
  setMultipleSelected: null,
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
