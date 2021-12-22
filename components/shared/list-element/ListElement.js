const ListElement = ({ icon, name }) => {
  return (
    <li>
      {icon ? <img src={'/icons/' + icon + '.svg'} alt={icon} /> : null}
      <span>{name}</span>
    </li>
  );
};

export default ListElement;
