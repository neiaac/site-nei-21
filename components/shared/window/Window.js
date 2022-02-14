import { window, tab, content, map_content, eventInfo } from './window.module.scss';
import Link from 'next/link';

const Window = ({ img, event, isMap }) => (
  <div className={window}>
    <div className={tab}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    {isMap ? (
      <div className={map_content}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.017100633384!2d-8.418291584168072!3d40.186432877536575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22f9952aaf6517%3A0xd3822ec1d359eb52!2sDEI%20-%20Department%20of%20Informatics%20Engineering%20-%20FCTUC!5e0!3m2!1sen!2spt!4v1644776872202!5m2!1sen!2spt"
          width=''
          height=''
          title='Mapa da localização do Departamento de Engenharia Informática da Universidade de Coimbra'
          loading="lazy">
        </iframe>
      </div>
    ) : (
      <div className={content}>
        <img src={img} alt="" />
        {event ? (
          <Link href={`/events/${event.id}`}>
            <div className={eventInfo}>
              <h6>{event.name}</h6>
              <span>{event.place}</span>
              <span>{event.date}{event.horas ? ` às ${event.horas}` : null}</span>
            </div>
          </Link>
        ) : null}
      </div>
    )}
  </div>
);

export default Window;
