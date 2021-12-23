import { window, tab, content, eventInfo } from './window.module.scss';

const Window = ({ img, event }) => (
  <div className={window}>
    <div className={tab}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className={content}>
      <img src={img + '.png'} alt="" />
      {event ? (
        <div className={eventInfo}>
          <h6>Nome do Evento</h6>
          <span>Local</span>
          <span>Data</span>
        </div>
      ) : null}
    </div>
  </div>
);

export default Window;
