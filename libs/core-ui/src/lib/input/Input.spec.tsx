import { render, screen, fireEvent } from '@testing-library/react';
import Input from './input';
import '@testing-library/jest-dom';
import Icon from '../icon/icon';

describe('Input', () => {
  it('should render value of input', () => {
    render(<Input label="user-name" />);
    const input = screen.getByLabelText('user-name') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Rafael' } });
    expect(input?.value).toBe('Rafael');
  });

  it('should render disable input', () => {
    render(<Input disable label="user-name" />);
    const input = screen.getByLabelText('user-name') as HTMLInputElement;
    expect(input).toBeDisabled();
  });

  it('should render error of input', () => {
    render(<Input error label="user-name" />);
    const input = screen.getByLabelText('user-name') as HTMLInputElement;
    expect(input).toHaveClass('error');
  });
  it('should render input have prefix or subfix', () => {
    render(
      <Input
        iconPrefix={<Icon name="ic-add" />}
        iconSuffix={<Icon name="ic-clear" />}
        label="user-name"
      />
    );
    const prefix = screen.getByTestId('icon-prefix');
    const subfix = screen.getByTestId('icon-subfix');
    expect(prefix).toBeTruthy();
    expect(subfix).toBeTruthy();
  });
});
