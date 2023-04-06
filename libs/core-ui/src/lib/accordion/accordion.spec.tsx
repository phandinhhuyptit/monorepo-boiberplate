import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { faker } from '@faker-js/faker';
import { Accordion } from './accordion';

describe('Input', () => {
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
  it('should render  accordion', () => {
    render(
      <Accordion.Root name="test">
        {items.map((item, index) => {
          return (
            <Accordion.Item
              key={`accordion-${index}`}
              id={`accordion-${index}`}
              header={<Accordion.Header id="item1" title={item.title} />}
            >
              {item.content}
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    );

    items.forEach(({ title, content }) => {
      const titleEl = screen.queryByText(title);
      const contentEl = screen.queryByText(content);

      expect(titleEl).toBeInTheDocument();
      expect(contentEl).toBeInTheDocument();
    });
  });

  it('should display multiple content if collapse is true', () => {
    render(
      <Accordion.Root multiple={true} name="test">
        {items.map((item, index) => {
          return (
            <Accordion.Item
              key={`${item.title}-${index}`}
              id={`${item.title}-${index}`}
              header={
                <Accordion.Header
                  id={`${item.title}-${index}`}
                  title={item?.title}
                />
              }
            >
              {item.content}
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    );

    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach((checkbox, index) => {
      expect(checkbox).toBeInTheDocument();
    });

    fireEvent.click(checkboxes[0]);
    fireEvent.click(checkboxes[1]);
    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes[1]).toBeChecked();
  });
});
