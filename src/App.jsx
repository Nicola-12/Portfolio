import styles from "./App.module.scss";
import About from "./components/about/About";
import Header from "./components/header/Header";
import ProjectCard from "./components/projectCard/ProjectCard";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.body}>
        <About />
        <div className={styles.projects}>
          <h1 id="title">Projetos</h1>
          <ProjectCard className={styles.card1}/>
          <ProjectCard className={styles.card2}/>
          <ProjectCard className={styles.card3}/>
        </div>
      </div>
    </div>
  );
}
