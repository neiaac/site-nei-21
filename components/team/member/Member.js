import { member } from './member.module.scss';

const Member = ({ name, role, photo }) => (
  <div className={member}>
    <img src={photo ? photo : 'black.png'} alt="member" />
    <span>{name}</span>
    <span>{role}</span>
  </div>
);

export default Member;
