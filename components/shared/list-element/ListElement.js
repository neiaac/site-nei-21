import { listElement } from './list-element.module.scss';

const ListElement = ({ icon, text, url }) => {
  return (<li className={listElement} >
    <img src={'/icons/' + icon + '.svg'} alt={icon} />
    {url ? <a href={url} target='_blank' rel='noopener noreferrer'>{text}</a> : <span>{text}</span>}
  </li >);
}


export default ListElement;
