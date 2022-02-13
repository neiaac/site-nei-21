import List from '../components/about/list';
import Title from '../components/shared/title';
import Window from '../components/shared/window';
import { locals, contactsNei, contactsDei } from '../utils/about';
import { about, contacts, inline } from '../styles/about.module.scss';

const About = () => (
  <main className={about}>
    <Window isMap={true} />
    <div className={contacts}>
      <Title title="sobre" />
      <List title="localização" content={locals} />
      <div className={inline}>
        <List title="Contactos Nei" content={contactsNei} />
        <List title="Contactos Dei" content={contactsDei} />
      </div>
    </div>
  </main>
);

export default About;
