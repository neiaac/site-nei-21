import { listElement } from './list-element.module.scss';

const ListElement = ({ icon, name }) => (
  <li className={listElement}>
    {icon ? <img src={'/icons/' + icon + '.svg'} alt={icon} /> : null}
    <span>{name}</span>
  </li>
);

export default ListElement;
