import Title from "../components/shared/title";
import Window from "../components/shared/window";
import styles from "../styles/about.module.scss";

export default function About() {
  return (
    <main className={styles.about}>
      <Window img="placeholder" />
      <div className={styles.contacts}>
        <Title title="sobre"/>
        <div className={styles.info}>
          <h3>Localização</h3>
          <p>
            Departamento de Engenharia Informática
            <br />
            Faculdade de Ciências e Tecnologia
            <br />
            Universidade de Coimbra
            <br />
            Pólo II - Pinhal de Marrocos
            <br />
            3030-290 Coimbra
            <br />
          </p>
        </div>
        <div className={styles.inline}>
          <div className={styles.info}>
            <h3>Contactos Nei</h3>
            <div>
              <img src="/icons/phone.svg" alt="adasd"></img>
              <span>aaa</span>
            </div>
            <div>
              <img src="/icons/phone.svg" alt="adasd"></img>
              <span>aaa</span>
            </div>
            <div>
              <img src="/icons/phone.svg" alt="adasd"></img>
              <span>aaa</span>
            </div>
            <div>
              <img src="/icons/phone.svg" alt="adasd"></img>
              <span>aaa</span>
            </div>
          </div>
          <div className={styles.info}>
            <h3>Contactos Dei</h3>
            <div>
              <img src="/icons/phone.svg" alt="adasd"></img>
              <span>aaa</span>
            </div>
            <div>
              <img src="/icons/phone.svg" alt="adasd"></img>
              <span>aaa</span>
            </div>
            <div>
              <img src="/icons/phone.svg" alt="adasd"></img>
              <span>aaa</span>
            </div>
            <div>
              <img src="/icons/phone.svg" alt="adasd"></img>
              <span>aaa</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
