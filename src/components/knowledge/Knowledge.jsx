import Slider from '../slider/Slider';
import style from './Knowlegde.module.scss';

export default function Knowledge() {
  return (
    <div className={style.knowledge}>
      <div>
        <Slider name='HTML' percent='30'/>
      </div>
    </div>
  );
}
