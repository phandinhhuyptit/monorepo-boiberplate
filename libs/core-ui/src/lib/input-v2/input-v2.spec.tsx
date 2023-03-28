import { render } from '@testing-library/react';

import Input from './input-v2';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input />);
    expect(baseElement).toBeTruthy();
  });
});
