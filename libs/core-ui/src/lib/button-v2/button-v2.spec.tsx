import { render, fireEvent, cleanup } from '@testing-library/react';
import Button from './button-v2';

const defaultProps = {
  onClick: jest.fn(),
  text: 'Submit',
};

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });
});
