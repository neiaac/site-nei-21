import { useState, useEffect } from 'react';
import { db } from '../lib/firestore_config';
import { doc, getDoc } from 'firebase/firestore/lite';

import Button from '../components/shared/button';
import Title from '../components/shared/title';
import Window from '../components/shared/window';

import {
  landing,
  hero,
  info,
  infoRow,
  content,
  events,
  buttons,
  eventsList,
  blue,
  cable,
} from '../styles/landing.module.scss';

const Home = () => {
  const [active, setActive] = useState(true);
  const [seeMore, setSeeMore] = useState(false);
  const [evList, setEvList] = useState({});

  // fetch events from firebase
  const eventsInfo = async () => {
    const snapshot = await getDoc(doc(db, "events", '21_22'));
    if (snapshot.exists()) {
      return snapshot.data();
    }
  };
  useEffect(() => {
    eventsInfo().then((res) => { setEvList(res); });
  }, []);

  function getDate(d) {
    if (!d) return new Date().toISOString().split('T')[0]
    return new Date(d).toISOString().split('T')[0];
  }

  function reorderDate(d, sep) {
    if (d.length == 10) {
      let [day, month, year] = d.split(sep);
      return getDate(`${year}${sep}${month}${sep}${day}`);
    }
  }

  const displayEvents = () => {
    if (Object.keys(evList).length != 0) {
      const evArray = evList.event_info.reverse();
      const end = evArray.findIndex(ev => getDate() > reorderDate(ev.date, '-'))
      const upcoming = evArray.slice(0, end);
      const past = evArray.slice(end, evArray.length);
      var list;
      if (active) {
        console.log('Past Events: ', past);
        list = past.map((ev, index) => {
          return <Window img={ev.image_url} event={ev} key={index} />
        });
      }
      else {
        console.log('Upcoming Events: ', upcoming);
        list = upcoming.map((ev, index) => {
          return <Window img={ev.image_url} event={ev} key={index} />
        });
      }
      return <div className={eventsList}>{list}{/* {seeMore ? (
        <>
          <Window img="about" event />
          buceta
        </>
      ) : null} */}</div>;
    }
  }

  return (
    <main className={landing}>
      <section className={hero}>
        <Title title="whoami" />
        <img className={cable} src="cable_landing.svg" alt="Cable" />
        <h1 className={blue}>Núcleo de Estudantes de Informática</h1>
        <span>Associação Académica de Coimbra</span>
        <img src="icons/down.svg" alt="More content below" />
      </section>
      <section className={info}>
        <div className={infoRow}>
          <div className={content}>
            <h2>
              O que é o <span className={blue}>NEI?</span>
            </h2>
            <p>
              O <span className={blue}>NEI/AAC</span> (Núcleo de Estudantes de
              Informática da Associação Académica de Coimbra) é um orgão
              integrante da AAC que tem o propósito de representar os estudantes
              de Engenharia Informática e de Design e Multimédia da Universidade
              de Coimbra.
            </p>
          </div>
          <Window img="about" />
        </div>
        <div className={infoRow}>
          <Window img="about" />
          <div className={content}>
            <h2>
              O que faz o <span className={blue}>NEI?</span>
            </h2>
            <p>
              Procura ajudar os alunos a ter a melhor experiência no DEI durante
              a sua permanência na UC. Assim, organiza várias actividades
              culturais, desportivas, recreativas e formativas, divulga e presta
              apoio na organização de outros{' '}
              <span className={blue}>eventos</span>.
            </p>
          </div>
        </div>
      </section>
      <section className={events}>
        <Title title="events" />
        <div className={buttons}>
          <Button
            color={active ? 'black' : 'grey'}
            text="Passados"
            handler={() => { setActive(!active); }}
          />
          <Button
            color={!active ? 'black' : 'grey'}
            text="Próximos"
            handler={() => { setActive(!active); }}
          />
        </div>
        {displayEvents()}
        <Button
          color="blue"
          text={seeMore ? 'Ver menos' : 'Ver mais'}
          handler={() => setSeeMore(!seeMore)}
        />
      </section>
    </main>
  );
};

export default Home;
