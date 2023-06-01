import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Repository } from './models/Repository';
import styles from './App.module.scss';
import About from './components/about/About';
import Header from './components/header/Header';
import Knowledge from './components/knowledge/Knowledge';
import ProjectCard from './components/projectCard/ProjectCard';

export default function App() {
  const [repositories, setRepositories] = useState<Repository[]>([
    { id: 0 },
    { id: 1 },
    { id: 2 },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get('https://api.github.com/users/Nicola-12/repos')
        .then((response) => {
          setRepositories(response.data);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.app__body}>
        <About />
        <h1 className={styles.title}>Projetos</h1>
        <div className={styles.app__body__projects}>
          {repositories.map((repo) => (
            <ProjectCard
              key={repo.id}
              item={repo}
              isLoading={isLoading}
              className={styles.card}
            />
          ))}
        </div>
        <div className={styles.app__body__knowledge}>
          <h1 className={styles.title}>Conhecimentos</h1>
          <Knowledge />
        </div>
      </div>
    </div>
  );
}
