import { content, links } from './regulation.module.scss';

const Guides = () => (
  <section className={content}>
    <div className={links}>
      <a href="" target="_blank">
        <img src="icons/arrow_blue.svg" alt="arrow icon" />
        <span>Regulamento Pedagógico da Universidade de Coimbra</span>
      </a>
      <a href="" target="_blank">
        <img src="icons/arrow_blue.svg" alt="arrow icon" />
        <span>Regulamento Académico da UC</span>
      </a>
      <a href="" target="_blank">
        <img src="icons/arrow_blue.svg" alt="arrow icon" />
        <span>Regulamento de Direitos Especiais dos Estudantes da UC</span>
      </a>
      <a href="" target="_blank">
        <img src="icons/arrow_blue.svg" alt="arrow icon" />
        <span>Outros Regulamentos</span>
      </a>
    </div>
    <h2>Regulamento Pedagógico</h2>
    <div>
      <h3>Melhoria de Classificação</h3>
      <p>
        2 — O estudante que, para qualquer unidade curricular à exceção da tese
        e estágio, pretenda melhorar a classificação obtida em ano(s)
        anterior(es) ou mediante creditação, pode fazê -lo livremente voltando a
        inscrever -se e a frequentar a referida unidade curricular, desde que a
        mesma se mantenha em funcionamento, estando apenas sujeito ao número
        máximo de ECTS em que possa inscrever-se sendo a melhoria de nota
        considerada uma reinscrição.
      </p>
      <p>
        6 — Nas situações de melhoria de classificação, é sempre considerada a
        classificação mais elevada.
      </p>
    </div>
    <div>
      <h3>Divulgação de Classificações</h3>
      <p>
        3 — Os resultados da avaliação, qualquer que seja a modalidade adotada,
        são divulgados até catorze dias seguidos após a realização dos mesmos.
      </p>
      <p>
        4 — Se a decisão de comparecer a uma prova de avaliação depender de
        classificações anteriores, estas são divulgadas, no sistema de
        informação académica, com uma antecedência mínima de três dias seguidos
        antes da data marcada para a realização dessa prova.
      </p>
    </div>
    <div>
      <h3>Avaliação Periódica</h3>
      <p>
        6 — No regime de avaliação periódica, quando a avaliação compreender uma
        ou mais frequências ou testes escritos, um deles pode ser realizado na
        data do exame final da época normal.
      </p>
      <p>
        7 — Neste regime de avaliação, o estudante que não obtenha a aprovação
        ou que pretenda fazer subida de classificação tem acesso livre à época
        de recurso, sem prejuízo do disposto no nº8.
      </p>
      <p>
        8 — Nas unidades curriculares em que a avaliação de conhecimentos e de
        competências exija a utilização de uma modalidade que não possa ser
        substituída por avaliação por exame final, a avaliação por exame reporta
        -se apenas à parte restante da avaliação.
      </p>
    </div>
    <div>
      <h3>Fraude e Plágio</h3>
      <p>
        1 — A fraude ou tentativa de fraude cometida em sede de avaliação de uma
        unidade curricular, ao violar o princípio base da honestidade académica,
        inviabiliza essa mesma avaliação e leva à reprovação liminar do
        estudante nessa inscrição na unidade curricular em causa.
      </p>
    </div>
    <div>
      <h3>Consulta de provas e esclarecimentos</h3>
      <p>
        1 — Após a disponibilização da respetiva classificação no sistema de
        informação académica o estudante tem o direito de consultar os seus
        exames, trabalhos ou quaisquer outros elementos de avaliação, juntamente
        com os enunciados das provas escritas.
      </p>
      <p>
        2 — Junto com os resultados da avaliação, o docente responsável pela
        unidade curricular tem o dever de tornar público um período durante o
        qual os estudantes podem consultar as provas, trabalhos ou elementos
        avaliados, dentro do prazo máximo de 15 dias úteis subsequentes à
        publicação de resultados da avaliação e até 3 dias úteis antes da
        realização dos eventuais exames orais e da prova de recurso.
      </p>
    </div>
  </section>
);

export default Guides;
