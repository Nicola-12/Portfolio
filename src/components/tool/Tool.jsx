import styles from './Tool.module.scss'

export default function Tool(props) {
  return (
    <div className={styles.tool}>
      <span className={styles.tool__name}>{props.name}</span>
    </div>
  );
}
