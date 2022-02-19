import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { doc, getDoc } from 'firebase/firestore/lite';
import { db } from '../../lib/firestore_config';

import Title from '../../components/shared/title';
import Window from '../../components/shared/window';
import ListElement from '../../components/shared/list-element';

import { event, info, list } from '../../styles/event.module.scss';

// @TODO - arranjar maneira de saber o tamanho do array de eventos upfront
/* export async function getStaticPaths() { } */

// export async function getStaticPaths({ params }) { }

const EventComponent = () => {
  const [eventDetails, setEventDetails] = useState([]);
  const router = useRouter();

  // fetch specific eventDetails from firebase
  const eventInfo = async () => {
    const snapshot = await getDoc(doc(db, "events", '21_22'));
    if (snapshot.exists()) {
      const evs = snapshot.data().event_info;
      return evs.filter(ev => {
        return ev.id == router.query.id;
      });
    }
  };

  useEffect(() => {
    eventInfo().then((res) => { setEventDetails(res[0]); console.log(res[0]); });
  }, []);

  return (
    <main className={event} >
      <main className={event} >
        <div className={info}>
          <Title title="eventos" />
          <h2>{eventDetails.name}</h2>
          <p>{eventDetails.descricao}</p>
          <ul className={list}>
            <ListElement text={eventDetails.date} icon='calendar' />
            <ListElement text={eventDetails.horas} icon='clock' />
            <ListElement text={eventDetails.place} icon='location' />
            {eventDetails.preco ? <ListElement text={eventDetails.preco} icon='euro' /> : null}
            {eventDetails.link ? <ListElement text='Link' icon='link' url={eventDetails.link} /> : null}
          </ul>
          <button type="button" onClick={() => router.back()}>
            <img src="../icons/arrow_white.svg" alt="Back button" />
          </button>
        </div>
        <Window img={eventDetails.image_url} />
      </main >
    </main >
  );
};

export default EventComponent;
