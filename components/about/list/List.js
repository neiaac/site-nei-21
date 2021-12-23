import ListElement from '../../../components/shared/list-element';

import { list } from './list.module.scss';

const List = ({ title, content }) => (
  <div className={list}>
    <h6>{title}</h6>
    <ul>
      {content.map((x) => {
        return <ListElement key={x.name} icon={x.icon} name={x.name} />;
      })}
    </ul>
  </div>
);

export default List;
