import { render } from '@testing-library/react';

import ButtonOutline from './button-outline';

describe('ButtonOutline', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonOutline />);
    expect(baseElement).toBeTruthy();
  });
});
