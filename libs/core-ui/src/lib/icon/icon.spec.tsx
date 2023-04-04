import { render } from '@testing-library/react';

import Icon from './icon';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon name="ic-add" />);
    expect(baseElement).toBeTruthy();
  });
});
