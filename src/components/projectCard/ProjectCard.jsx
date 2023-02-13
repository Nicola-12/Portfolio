import Image from "../Image/Image";
import Tool from "../tool/Tool"
import styles from "./ProjectCard.module.scss";

export default function ProjectCard() {
  return (
    <div className={styles.card}>
      <span className={styles.card__title}>Título do Projeto</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className={styles.card__tools}>
        <Tool name="HTML" />
        <Tool name="JavaScript" />
        <Tool name="JavaScript" />
        <Tool name="JavaScript" />
        <Tool name="JavaScript" />
        <Tool name="JavaScript" />
        <Tool name="JavaScript" />
        <Tool name="Flutter" />
        <Tool name="Dart" />
      </div>
      <Image />
    </div>
  );
}
