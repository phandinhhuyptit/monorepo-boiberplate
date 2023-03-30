import { ReactNode, cloneElement } from 'react';
import styles from './accordion-header.module.scss';
import Icon from '../../icon/icon';
import clsx from 'clsx';
import { useAccordionContext } from '../accordion.context';
interface AccordionHeaderProps {
  title: ReactNode;
  icon?: JSX.Element;
  id: string;
}

const AccordionHeader = ({ title, icon, id }: AccordionHeaderProps) => {
  const { multipleSelected, name } = useAccordionContext();
  const typeInput = multipleSelected ? 'checkbox' : 'radio';
  const nameInput = !multipleSelected ? name : undefined;
  return (
    <>
      <input placeholder={id} type={typeInput} id={id} name={nameInput} />
      <label
        htmlFor={id}
        className={clsx([styles['accordion-header'], 'header'])}
      >
        {title}
        {icon ? (
          cloneElement(icon, { className: clsx(icon.props.className, 'icon') })
        ) : (
          <Icon
            className={clsx([styles['icon'], 'icon'])}
            name="ic-arrow-thin"
          />
        )}
      </label>
    </>
  );
};

export default AccordionHeader;
