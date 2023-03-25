import styles from './shared-utils.module.css';

/* eslint-disable-next-line */
export interface SharedUtilsProps {}

export function SharedUtils(props: SharedUtilsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedUtils!</h1>
    </div>
  );
}

export default SharedUtils;
