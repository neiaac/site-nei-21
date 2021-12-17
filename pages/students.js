import { useState } from 'react';
import Guides from '../components/students/guides';
import Regulation from '../components/students/regulation';
import Title from '../components/shared/title';
import Button from '../components/shared/button';
import { students, buttons } from '../styles/students.module.scss';

export default function Students() {
  const [title, setTitle] = useState('guia_pedagógico');
  const [active, setActive] = useState(true);

  const changeContent = (title) => {
    setTitle(title);
    setActive(!active);
  };

  return (
    <main className={students}>
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
}
