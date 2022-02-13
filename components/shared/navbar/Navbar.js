import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
//import Image from 'next/image';

import Button from '../button';

import {
  navbar,
  logo,
  navigation,
  mobileButton,
  navigationMobile,
} from './navbar.module.scss';

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const changePage = (page) => {
    router.push(page);
    setIsOpen(false);
  };

  return (
    <nav className={navbar}>
      <a className={logo}>
        <Link href="/">nei</Link>
      </a>
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
      <Button
        text="menu"
        color="blue"
        handler={() => setIsOpen(true)}
        className={mobileButton}
      />
      {isOpen ? (
        <div className={navigationMobile}>
          <div>
            <button className={logo} onClick={() => changePage('/')}>
              nei
            </button>
            <Button
              text="Close"
              color="black"
              handler={() => setIsOpen(false)}
              className={mobileButton}
            />
          </div>
          <div>
            <button onClick={() => changePage('/events')}>Agenda</button>
            <button onClick={() => changePage('/team')}>Equipa</button>
            <button onClick={() => changePage('/students')}>Alunos</button>
            <button onClick={() => changePage('/about')}>Sobre</button>
          </div>
        </div>
      ) : null}
    </nav>
  );
};
export default Navbar;
