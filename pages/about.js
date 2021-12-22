import List from '../components/about/list';
import Title from '../components/shared/title';
import Window from '../components/shared/window';
import { about, contacts, inline } from '../styles/about.module.scss';

const locals = [
  { name: 'Departamento de Engenharia Informática' },
  { name: 'Faculdade de Ciências e Tecnologia' },
  { name: 'Universidade de Coimbra' },
  { name: 'Pólo II - Pinhal de Marrocos' },
  { name: '3030-290 Coimbra' },
];
const contactsNei = [
  { name: '239 790 002', icon: 'phone' },
  { name: 'tp.cu.ied.tneduts@caaien', icon: 'phone' },
  { name: 'tp.acimedaca@ien ', icon: 'phone' },
  { name: 'Sala C4.3 (Torre C)', icon: 'phone' },
  { name: 'facebook.com/neiaac', icon: 'phone' },
];
const contactsDei = [
  { name: '239 790 000', icon: 'phone' },
  { name: 'tp.cu.ied@ofni', icon: 'phone' },
  { name: 'dei.uc.pt', icon: 'phone' },
  { name: 'Dep.Engenharia.Informatica.U.Coimbra', icon: 'phone' },
];

export default function About() {
  return (
    <main className={about}>
      <Window img="about" />
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
}
