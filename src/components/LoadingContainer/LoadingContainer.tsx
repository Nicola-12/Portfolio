import React from 'react';
import style from './LoadingContainer.module.scss';

type Props = {
  width: number | string;
  height: number | string;
  borderRadius?: number;
};

export default function LoadingContainer({
  width,
  height,
  borderRadius,
}: Props) {
  return <div className={style.container} style={{width, height, borderRadius}} ></div>;
}
