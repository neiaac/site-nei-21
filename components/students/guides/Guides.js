import { content, topic, blue } from './guides.module.scss';

const Guides = () => (
  <section className={content}>
    <div>
      <h2>Problemas pedagógicos. Quem contactar?</h2>
      <p>
        É normal no decorrer do nosso percurso académico termos dúvidas sobre
        critérios aplicados nas cadeiras ou daquilo que são os nossos direitos
        como alunos. Às vezes detectamos inclusive situações que consideramos
        estarem a ser mal aplicadas e que deveriam ser rapidamente corrigidas.
      </p>
      <p>
        Mas de todos aqueles que me representam quem devo contactar? Falei com o
        Professor mas nada mudou. O que mais posso fazer?
      </p>
      <p>
        Neste guia apontamos os principais intervenientes pedagógicos, quais as
        suas responsabilidades e como te podem ajudar. Para a maioria das
        situações esta é a ordem a utilizar.
      </p>
    </div>
    <div className={topic}>
      <span>1</span>
      <div>
        <h3>Professor Regente</h3>
        <p>
          O Professor Regente é o professor responsável pelo programa e pelo
          funcionamento de uma cadeira e será por norma o professor a contactar.
          Se tens dúvidas sobre quem é o Professor Regente poderás consultar
          essa Informação no Inforestudante em:
        </p>
        <p className={blue}>
          Minhas Disciplinas {'>'} Informação Geral {'>'} (Seleccionar unidade
          curricular) {'>'} Docente Responsável
        </p>
        <p>
          Tratando-se de uma questão específica de uma cadeira esta deverá ser a
          primeira pessoa a contactar pois será a que está melhor informada
          sobre o assunto e, dentro do leque de professores da cadeira, aquela
          terá maior responsabilidade e autoridade para tomar decisões e agir.
        </p>
        <h4>Como contactar?</h4>
        <p>
          Podes contactá-lo por e-mail ou presencialmente no seu gabinete. Tanto
          o e-mail como o horário de atendimento podem ser consultados no
          Inforestudante em:
        </p>
        <p className={blue}>
          Minhas Disciplinas {'>'} Informação Geral {'>'} (Seleccionar unidade
          curricular) {'>'} Informação Docentes
        </p>
        <p>
          O melhor meio depende da importância e urgência da questão sendo que o
          contacto pessoal é muitas vezes preferível.
        </p>
      </div>
    </div>
    <div className={topic}>
      <span>2</span>
      <div>
        <h3>Coordenador de Curso</h3>
        <p>
          O Coordenador tem por missão zelar pela qualidade do curso. Acompanha
          o funcionamento do curso em ligação com os Directores dos
          Departamentos envolvidos na sua leccionação, reúne com os respectivos
          professores para efeitos de coordenação de regras de funcionamento do
          curso, datas de avaliação e volume de trabalho solicitado aos alunos,
          verifica o cumprimento das normas aplicáveis e informa o conselho
          científico, bem como as Comissões Científicas dos Departamentos
          envolvidos no curso, sobre a sua actividade (Estatutos FCTUC).
        </p>
        <p>
          Existe um Coordenador de Curso por ciclo. Podes consultar a lista de
          Coordenadores na Página do DEI:
        </p>
        <p className={blue}>
          Página do DEI {'>'} Pessoas {'>'} Orgãos de Gestão {'>'} Coordenadores
          de Curso
        </p>
        <p>
          Se não conseguiste ver o teu problema resolvido junto dos professores
          da cadeira o melhor será abordar o Coordenador de Curso. Ele terá uma
          visão mais alargada do problema e tem a responsabilidade de intervir
          se se verificar que existe uma medida a ser aplicada incorrectamente.
        </p>
        <h4>Como contactar?</h4>
        <p>
          Podes contactá-lo por e-mail ou presencialmente no seu gabinete. Tanto
          o e-mail como o horário de atendimento podem ser consultados no
          Inforestudante em:
        </p>
        <p className={blue}>Página do DEI {'>'} Contactos</p>
      </div>
    </div>
    <div className={topic}>
      <span>3</span>
      <div>
        <h3>Provedor do Estudante</h3>
        <p>
          A <span className={blue}>missão</span> do Provedor do Estudante é
          zelar pelo respeito pelos direitos e interesses legítimos dos
          estudantes. Quando toma conhecimento de um facto que coloque esses
          direitos ou interesses legítimos em causa, quer por comunicação de
          estudantes quer por qualquer outro meio minimamente credível, o
          Provedor deve procurar formas de os proteger através da mediação e da
          negociação informal com os envolvidos.
        </p>
        <p>
          O actual Provedor do Estudante da Universidade de Coimbra, o Professor
          José Luis Afonso, ex-Coordenador de Curso de Engenharia Mecânica, tem
          conhecimento das realidades mais particulares dos cursos do Pólo 2.
        </p>
        <p>
          O NEI mantém um contacto regular com o Provedor para debater várias
          questões pedagógicas. Não te acanhes em recorrer ao mesmo para
          questões onde tenhas dúvidas ou sintas que os teus direitos como
          estudante não estão a ser respeitados.
        </p>
        <p>
          Tens mais algumas questões quanto ao papel do Provedor do Estudante?
          Consulta as <span className={blue}>Perguntas Frequentes</span>.
        </p>
        <h4>Como contactar?</h4>
        <p>
          Aconselhamos a marcares reunião com o Provedor do Estudante por e-mail
          uma vez que este pede que o assunto seja exposto por este meio por uma
          questão de registo e acompanhamento do assunto. No entanto poderás
          contactá-lo de <span className={blue}>outras formas</span>.
        </p>
        <p className={blue}>provedordoestudante@ci.uc.pt</p>
      </div>
    </div>
  </section>
);

export default Guides;
