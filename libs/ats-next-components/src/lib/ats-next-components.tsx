import styles from './ats-next-components.module.scss';

/* eslint-disable-next-line */
export interface AtsNextComponentsProps {}

export function AtsNextComponents(props: AtsNextComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AtsNextComponents!</h1>
    </div>
  );
}

export default AtsNextComponents;
