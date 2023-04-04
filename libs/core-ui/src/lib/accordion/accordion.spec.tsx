import { render } from '@testing-library/react';

import { AccordionRoot } from './accordion';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccordionRoot name="test" />);
    expect(baseElement).toBeTruthy();
  });
});
