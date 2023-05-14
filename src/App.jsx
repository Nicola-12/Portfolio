import styles from './App.module.scss';
import About from './components/about/About';
import Header from './components/header/Header';
import ProjectCard from './components/projectCard/ProjectCard';
import Knowledge from "./components/knowledge/Knowledge";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.app__body}>
        <About />
        <div className={styles.app__body__projects}>
          <h1 className={styles.title}>Projetos</h1>
          <ProjectCard className={styles.card1} />
          <ProjectCard className={styles.card2} />
          <ProjectCard className={styles.card3} />
        </div>
        <div className={styles.app__body__knowledge}>
          <h1 className={styles.title}>Conhecimentos</h1>
          <Knowledge />
        </div>
      </div>
    </div>
  );
}
