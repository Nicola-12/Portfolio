import Image from '../Image/Image';
import LoadingContainer from '../LoadingContainer/LoadingContainer';
import Tool from '../tool/Tool';
import styles from './ProjectCard.module.scss';
import { useEffect, useState } from 'react';

export default function ProjectCard() {
  // [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <LoadingContainer width={100} height={150} borderRadius={16} />;
  }

  return (
    <div className={styles.card}>
      <span className={styles.card__title}>Título do Projeto</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className={styles.card__tools}>
        <Tool name='HTML' />
        <Tool name='JavaScript' />
        <Tool name='JavaScript' />
        <Tool name='JavaScript' />
        <Tool name='JavaScript' />
        <Tool name='JavaScript' />
        <Tool name='JavaScript' />
        <Tool name='Flutter' />
        <Tool name='Dart' />
      </div>
      <Image />
    </div>
  );
}
