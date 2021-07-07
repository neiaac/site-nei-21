import Link from "next/link";
import styles from "./navbar.module.scss"

export default function Navbar() {
  console.log("1");
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.logo}>nei</a>
      </Link>
      <div className={styles.navigation}>
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
}
