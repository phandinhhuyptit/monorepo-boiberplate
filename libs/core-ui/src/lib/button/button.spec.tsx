import { render, fireEvent, cleanup, screen } from '@testing-library/react';

import Button, { ButtonComponentProps } from './button';
import '@testing-library/jest-dom';

const defaultProps: ButtonComponentProps = {
  onClick: jest.fn(),
  size: 'medium',
  variant: 'contain',
  disable: false,
  color: 'primary',
  name: 'primary',
};
describe('Button component', () => {
  it('should render a button with the class of primary', () => {
    render(<Button {...defaultProps}>{defaultProps?.name}</Button>);
    const primaryButton = screen.getByRole('button', { name: /primary/i });
    console.log('primaryButton', primaryButton);
    expect(primaryButton).toBeTruthy();
  });
  it('should render a disable button with the class of primary', () => {
    const { rerender } = render(
      <Button {...defaultProps}>{defaultProps?.name}</Button>
    );
    const primaryButton = screen.getByRole('button', { name: /primary/i });
    expect(primaryButton).toBeTruthy();
    // change props
    rerender(<Button {...defaultProps} disable={true} />);
    expect(primaryButton).toBeDisabled();
  });

  it('calls correct function on click', () => {
    const onClick = jest.fn();
    const { rerender } = render(
      <Button {...defaultProps} onClick={onClick}>
        {defaultProps?.name}
      </Button>
    );
    const primaryButton = screen.getByRole('button', { name: /primary/i });
    expect(primaryButton).toBeTruthy();
    fireEvent.click(primaryButton);
    expect(onClick).toHaveBeenCalled();
  });

  it('should render a button as a Link, checks for href attribute and primary class', () => {
    render(
      <Button {...defaultProps} element="link" href="/">
        link
      </Button>
    );
    const buttonAsLink = screen.getByRole('link', { name: /link/i });
    expect(buttonAsLink).toHaveAttribute('href', '/');
  });
});
