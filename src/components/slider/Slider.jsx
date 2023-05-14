import style from './Slider.module.scss';

export default function Slider(props) {
  return (
    <div className={style.container}>
      <pre className={style.container__name}>{props.name}</pre>
      <div className={style.container__slider}>
        <span className={style.container__slider__value} style={{width: `${props.percent}%`}}></span>
      </div>
    </div>
  );
}
