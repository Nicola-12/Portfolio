import styles from './Link.module.scss';

export default function Link(props) {
  return (
    <div className={styles.container}>
      <a className={styles.link} href={props.href}>
        <span className={styles.link__name}>{props.name}</span>
      </a>
    </div>
  );
}
