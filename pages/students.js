import { useState } from 'react';

import Guides from '../components/students/guides';
import Regulation from '../components/students/regulation';
import Title from '../components/shared/title';
import Button from '../components/shared/button';
import { students, buttons, cable } from '../styles/students.module.scss';

const Students = () => {
  const [title, setTitle] = useState('guia_pedagógico');
  const [active, setActive] = useState(true);

  const changeContent = (title) => {
    setTitle(title);
    setActive(!active);
  };

  return (
    <main className={students}>
      <img className={cable} src="cable_students.svg" alt="Cable" />
      <Title title={`alunos/${title}`} />
      <div className={buttons}>
        <Button
          color={active ? 'black' : 'grey'}
          text="Guia pedagógico"
          handler={() => changeContent('guia_pedagógico')}
        />
        <Button
          color={!active ? 'black' : 'grey'}
          text="Regulamentos"
          handler={() => changeContent('regulamentos')}
        />
      </div>
      {active ? <Guides /> : <Regulation />}
    </main>
  );
};

export default Students;
