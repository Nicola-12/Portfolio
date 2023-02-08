import Tool from "../tool/Tool";
import styles from "./ProjectCard.module.scss";

export default function ProjectCard() {
  return (
    <div className={styles.card}>
      <span>Título do Projeto</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Tool name='Flutter'/>
    </div>
  );
}
