import Calendar from '../components/events/calendar';
import Title from '../components/shared/title';
import Button from '../components/shared/button';
import Window from '../components/shared/window';
import { events, images } from '../styles/events.module.scss';

const calendar = [
  {
    year: '2020',
    months: {
      setembro: [],
      outubro: [],
      novembro: [],
      dezembro: [],
    },
  },
  {
    year: '2021',
    months: {
      fevereiro: [
        {
          data: '4',
          name: 'Nome do Evento #1',
        },
        {
          data: '11',
          name: 'Nome do Evento #2',
        },
        {
          data: '15',
          name: 'Nome do Evento #3',
        },
        {
          data: '21',
          name: 'Nome do Evento #4',
        },
        {
          data: '23',
          name: 'Nome do Evento #5',
        },
      ],
    },
  },
];

export default function Events() {
  return (
    <main className={events}>
      <Title title="equipa" />
      <section>
        <Calendar calendarList={calendar} />
        <div className={images}>
          <Button color="blue" text="2020-2021" />
          <Window img="placeholder" />
          <Window img="placeholder" />
          <Window img="placeholder" />
          <Window img="placeholder" />
          <Window img="placeholder" />
          <Window img="placeholder" />
        </div>
      </section>
    </main>
  );
}
