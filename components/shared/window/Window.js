import { window, tab, content } from './window.module.scss';

const Window = ({ img }) => (
  <div className={window}>
    <div className={tab}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className={content}>
      <img src={img + '.png'} alt="" />
    </div>
  </div>
);

export default Window;
