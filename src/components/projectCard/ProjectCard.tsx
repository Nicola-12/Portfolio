import React from 'react';
import Image from '../Image/Image';
import LoadingContainer from '../LoadingContainer/LoadingContainer';
import Tool from '../tool/Tool';
import styles from './ProjectCard.module.scss';
import { Repository } from '../../models/Repository';

export default function ProjectCard(props: {
  item: Repository;
  isLoading: any;
  className: any;
}) {
  if (props.isLoading) {
    return <LoadingContainer key={props.item.id} width={400} height={550} borderRadius={16} />;
  }

  return (
    <div className={styles.card}>
      <span className={styles.card__title}>{props.item.name}</span>
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
