import Member from '../components/team/member';
import Title from '../components/shared/title';
import Button from '../components/shared/button';
import { team, list, buttons } from '../styles/team.module.scss';

const Team = () => {
  return (
    <main className={team}>
      <Title title="equipa" />
      <div className={buttons}>
        <Button color="black" text="todos" />
        <Button color="blue" text="2020-2021" />
      </div>
      <div className={list}>
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" photo="placeholder" />
        <Member name="Nome" role="Cargo" />
      </div>
    </main>
  );
};

export default Team;
