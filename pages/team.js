import { db } from '../lib/firestore_config';
import { doc, getDoc } from 'firebase/firestore/lite';
import Member from '../components/team/member';
import Title from '../components/shared/title';
import Button from '../components/shared/button';
import { team, list, buttons } from '../styles/team.module.scss';
import { useState } from 'react';

const Team = () => {
  const teamInfo = async (year) => {
    const snapshot = await getDoc(doc(db, "team", year));
    if (snapshot.exists()) {
      return snapshot.data();
    }
  };

  const [roles, setRoles] = useState(teamInfo('21_22'));

  const teamList = () => {
    console.log(roles);
    if (Object.keys(roles).length != 0) {
      let memberList = roles.members.map((member, index) => {
        return <Member name={member.name} role={member.role} photo={member.image_url} />
      });
      return <div className={list}>{memberList}</div>;
    }
    else teamInfo('21_22').then((res) => setRoles(res));
  }

  return (
    <main className={team}>
      <Title title="equipa" />
      <div className={buttons}>
        <Button color="black" text="todos" />
        <Button color="blue" text="21-22" />
      </div>
      {teamList()}
    </main>
  );
};

export default Team;
