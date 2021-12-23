import Link from 'next/link';
import { navbar, logo, navigation } from './navbar.module.scss';

const Navbar = () => (
  <nav className={navbar}>
    <Link href="/">
      <a className={logo}>nei</a>
    </Link>
    <div className={navigation}>
      <Link href="/events">
        <a>Agenda</a>
      </Link>
      <Link href="/team">
        <a>Equipa</a>
      </Link>
      <Link href="/students">
        <a>Alunos</a>
      </Link>
      <Link href="/about">
        <a>Sobre</a>
      </Link>
    </div>
  </nav>
);

export default Navbar;
