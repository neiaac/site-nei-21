import { useRouter } from 'next/router';

import Title from '../../components/shared/title';
import Window from '../../components/shared/window';
import ListElement from '../../components/shared/list-element';

import { event, info, list } from '../../styles/event.module.scss';

const eventInfo = [
  { name: '18-20, FEV 2021', icon: 'phone' },
  { name: '21:30, 16:00', icon: 'phone' },
  { name: 'Online', icon: 'phone' },
  { name: 'Sem custos', icon: 'phone' },
];

const EventComponent = () => {
  const router = useRouter();

  console.log(router.query.id);

  return (
    <main className={event}>
      <div className={info}>
        <Title title="eventos" />
        <h2>Torneio de Jogos</h2>
        <p>
          Com o começo do semestre, o teu núcleo favorito traz um novo torneio
          de jogos 🎮 para ti e um grupo de amigos com 3 jogos à escolha com
          inscrições livres!! 😃🎉 Vem ter connosco no Discord and gl hf! 💻🏆
          Dia 18 - 21:30 - Rocket League 🏎️ - https://bit.ly/3qqbn5h Dia 19 -
          21: 30 - Cs Go 🔫 - https://bit.ly/2N8aBLX Dia 20 - 16:00 - League of
          Legends 🧂 - https://bit.ly/3aoxwvj A inscrição é livre, uma vez que
          não há prémio, mas traz entusiasmo porque vai ser brutal!! 😎 Tens até
          dia 17 de Fevereiro para te inscreveres e não precisas de ser aluno da
          UC! O local do evento vai ser online na discord do NEI.
        </p>
        <ul className={list}>
          {eventInfo.map((el) => {
            return <ListElement key={el.name} icon={el.icon} name={el.name} />;
          })}
        </ul>
        <button type="button" onClick={() => router.back()}>
          <img src="../icons/arrow_white.svg" alt="Back button" />
        </button>
      </div>
      <Window img="../event" />
    </main>
  );
};

export default EventComponent;
