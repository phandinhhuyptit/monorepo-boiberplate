import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AccordionContextProvider } from './accordion.context';
import { faker } from '@faker-js/faker';
import { Accordion } from './accordion';

describe('Accordion Context', () => {
  const items: Array<{
    title: string;
    content: string;
  }> = [];
  for (let i = 0; i < 3; i++) {
    items.push({
      title: faker.random.word(),
      content: faker.random.words(30),
    });
  }
  it('should global state for components', () => {
    const onSetMultipleSelected = jest.fn();
    const name = 'accordion';
    const multipleSelected = false;
    render(
      <AccordionContextProvider
        value={{ onSetMultipleSelected, name, multipleSelected }}
      >
        {items.map((item, index) => {
          return (
            <Accordion.Item
              key={`accordion-${index}`}
              id={`accordion-${index}`}
              header={
                <Accordion.Header
                  id={`accordion-${index}`}
                  title={item.title}
                />
              }
            >
              {item.content}
            </Accordion.Item>
          );
        })}
      </AccordionContextProvider>
    );
    const checkboxes = screen.getAllByRole('radio');
    checkboxes.forEach((checkbox) => {
      expect(checkbox).toHaveAttribute('name', name);
    });
  });
});
