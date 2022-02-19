import { calendar, year, month, day } from './calendar.module.scss';
import Link from 'next/link';

const Calendar = () => {

  return (
    <div className={calendar}>
      <span className={year}>2021</span>
      <span className={month}>Setembro</span>
      <div className={day}>
        <span>28</span>
        <span><Link href='/events/1'>Paddle no Rio Mondego</Link></span>
      </div>
      <span className={month}>Outubro</span>
      <div className={day}>
        <span>06</span>
        <span><Link href='/events/2'>Receção ao Caloiro</Link></span>
      </div>
      <div className={day}>
        <span>12</span>
        <span><Link href='/events/3'>Workshop de Django</Link></span>
      </div>
      <div className={day}>
        <span>13</span>
        <span><Link href='/events/4'>Torneio de Mini-golfe</Link></span>
      </div>
      <div className={day}>
        <span>16</span>
        <span><Link href='/events/5'>Torneio de E-Sports</Link></span>
      </div>
      <div className={day}>
        <span>19</span>
        <span><Link href='/events/6'>Workshop de HTML & CSS</Link></span>
      </div>

      <span className={month}>Novembro</span>
      <div className={day}>
        <span>09</span>
        <span><Link href='/events/7'>Torneio de Xadrez</Link></span>
      </div>
      <div className={day}>
        <span>10</span>
        <span><Link href='/events/8'>Torneio de Padel</Link></span>
      </div>
      <div className={day}>
        <span>10</span>
        <span><Link href='/events/9'>Jornadas Pedagógicas (DM)</Link></span>
      </div>
      <div className={day}>
        <span>11</span>
        <span><Link href='/events/10'>Conversas com Ex-Alunos EI</Link></span>
      </div>
      <div className={day}>
        <span>11</span>
        <span><Link href='/events/11'>Magusto</Link></span>
      </div>
      <div className={day}>
        <span>13</span>
        <span><Link href='/events/12'>Jogos Sem Fronteiras</Link></span>
      </div>
      <div className={day}>
        <span>17</span>
        <span><Link href='/events/13'>Jornadas Pedagógicas ECD</Link></span>
      </div>
      <div className={day}>
        <span>18</span>
        <span><Link href='/events/14'>Conversas com Ex-Alunos DM</Link></span>
      </div>
      <div className={day}>
        <span>22</span>
        <span>Torneio de Voleibol (Liga Académica)</span>
      </div>
      <div className={day}>
        <span>23</span>
        <span><Link href='/events/15'>Torneio de Jogos</Link></span>
      </div>
      <div className={day}>
        <span>24</span>
        <span><Link href='/events/16'>Jornadas Pedagógicas EI</Link></span>
      </div>
      <div className={day}>
        <span>25</span>
        <span><Link href='/events/17'>Workshop de InDesign</Link></span>
      </div>
      <div className={day}>
        <span>25</span>
        <span>Torneio de Futebol de 7 (Liga Académica)</span>
      </div>
      <div className={day}>
        <span>27</span>
        <span><Link href='/events/19'>Torneio de Paintball</Link></span>
      </div>
      <span className={month}>Dezembro</span>
      <div className={day}>
        <span>06 até 17</span>
        <span><Link href='/events/20'>Quinzena Natalícia 🎄</Link></span>
      </div>
      <div className={day}>
        <span>06</span>
        <span>Caça ao Tesouro</span>
      </div>
      <div className={day}>
        <span>11</span>
        <span>Minecraft Building Contest</span>
      </div>
      <div className={day}>
        <span>13</span>
        <span>Lanche & Bingo</span>
      </div>
      <div className={day}>
        <span>15</span>
        <span>Concurso de Programação</span>
      </div>
      <div className={day}>
        <span>16</span>
        <span>Palestra de Saúde Mental</span>
      </div>
      <div className={day}>
        <span>16</span>
        <span>Tarde de Jogos de Tabuleiro e Consola</span>
      </div>
      <span className={year}>2022</span>

      <span className={month}>Fevereiro</span>
      <div className={day}>
        <span>15</span>
        <span><Link href='/events/21'>Torneio de Futebol Caloiros vs Doutores</Link></span>
      </div>
      <div className={day}>
        <span>16</span>
        <span><Link href='/events/22'>Convívio no Moelas</Link></span>
      </div>
      <div className={day}>
        <span>17</span>
        <span>Torneio de Futsal - Eliminatórias 1 (Liga Académica)</span>
      </div>
      <div className={day}>
        <span>23</span>
        <span>Conversas com Ex-Alunos DM</span>
      </div>
      <div className={day}>
        <span>24</span>
        <span>Torneio de Futsal - Eliminatórias 2 (Liga Académica)</span>
      </div>
      <div className={day}>
        <span>28</span>
        <span>Sessão EU Careers Portugal</span>
      </div>

      <span className={month}>Março</span>
      <div className={day}>
        <span>01</span>
        <span>Torneio de Voleibol</span>
      </div>
      <div className={day}>
        <span>02</span>
        <span>Future.inAction()</span>
      </div>
      <div className={day}>
        <span>02</span>
        <span>Torneio de Futsal - Finais (Liga Académica)</span>
      </div>
      <div className={day}>
        <span>03</span>
        <span>Workshop de Adobe Illustrator</span>
      </div>
      <div className={day}>
        <span>08</span>
        <span>Torneio de Tag Rugby</span>
      </div>
      <div className={day}>
        <span>09</span>
        <span>Peddy Tascas</span>
      </div>
      <div className={day}>
        <span>10</span>
        <span>Talk & Workshop - 'Como fazer um pitch?'</span>
      </div>
      <div className={day}>
        <span>15 até 18</span>
        <span>NowWhat?</span>
      </div>
      <div className={day}>
        <span>23</span>
        <span>Conversas com Ex-Alunos EI</span>
      </div>
      <div className={day}>
        <span>26</span>
        <span>Jogos Sem Fronteiras</span>
      </div>
      <div className={day}>
        <span>30</span>
        <span>Workshop de Adobe Photoshop</span>
      </div>

      <span className={month}>Abril</span>
      <div className={day}>
        <span>1 até 3</span>
        <span>Shift APPens</span>
      </div>
      <div className={day}>
        <span>05</span>
        <span>Torneio de Basquetebol</span>
      </div>
      <div className={day}>
        <span>06</span>
        <span>Jornadas Pedagógicas DM</span>
      </div>
      <div className={day}>
        <span>7</span>
        <span>Comboio do Caloiro</span>
      </div>
      <div className={day}>
        <span>19</span>
        <span>AD-DEI</span>
      </div>
      <div className={day}>
        <span>23</span>
        <span>Corrida de Karts</span>
      </div>
      <div className={day}>
        <span>24 até 30</span>
        <span>Celebrações NEI 25</span>
      </div>
      <div className={day}>
        <span>26</span>
        <span>Torneio de Badminton</span>
      </div>
      <div className={day}>
        <span>27</span>
        <span>Workshop de Adobe AfterEffects</span>
      </div>

      <span className={month}>Maio</span>
      <div className={day}>
        <span>03</span>
        <span>Torneio de Futsal</span>
      </div>
      <div className={day}>
        <span>04</span>
        <span>Jornadas Pedagógicas EI</span>
      </div>
      <div className={day}>
        <span>07</span>
        <span>Feira de Voluntariado</span>
      </div>
      <div className={day}>
        <span>11</span>
        <span>HealthDEI</span>
      </div>
      <div className={day}>
        <span>13</span>
        <span>Pixel D'Ouro</span>
      </div>
      <div className={day}>
        <span>18</span>
        <span>Workshop de Fotografia</span>
      </div>
    </div>
  );
};

export default Calendar;
