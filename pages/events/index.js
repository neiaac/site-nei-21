import Calendar from '../../components/events/calendar';
import Title from '../../components/shared/title';
import Button from '../../components/shared/button';
import Window from '../../components/shared/window';
import { events, images } from '../../styles/events.module.scss';

const Events = () => {
  return (
    <main className={events}>
      <Title title="equipa" />
      <Button color="blue" text="2020-2021" />
      <section>
        <Calendar />
        <div className={images}>
          <Window img="placeholder" />
          <Window img="placeholder" />
          <Window img="placeholder" />
          <Window img="placeholder" />
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
};

export default Events;
