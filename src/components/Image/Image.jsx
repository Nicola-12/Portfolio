import styles from "./Image.module.scss";

export default function Image() {
  return (
    <div className={styles.image}>
      <img
        draggable="false"
        alt="Project Image Reference"
        src="https://source.unsplash.com/random"
      ></img>
    </div>
  );
}
