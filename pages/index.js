import { useState } from 'react';

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
} from '../styles/landing.module.scss';

const Home = () => {
  const [active, setActive] = useState(true);
  const [seeMore, setSeeMore] = useState(false);

  return (
    <main className={landing}>
      <section className={hero}>
        <Title title="whoami" />
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
            handler={() => setActive(!active)}
          />
          <Button
            color={!active ? 'black' : 'grey'}
            text="Próximos"
            handler={() => setActive(!active)}
          />
        </div>
        <div className={eventsList}>
          <Window img="about" event />
          <Window img="about" event />
          <Window img="about" event />
          <Window img="about" event />
          <Window img="about" event />
          <Window img="about" event />
          {seeMore ? (
            <>
              <Window img="about" event />
              <Window img="about" event />
              <Window img="about" event />
              <Window img="about" event />
              <Window img="about" event />
              <Window img="about" event />
            </>
          ) : null}
        </div>
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
