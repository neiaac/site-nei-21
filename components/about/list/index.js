import { list } from "./list.module.scss";

export default function List({ title, icon, content }) {
  return (
    <div className={list}>
      <h6>{title}</h6>
      <ul>
        {content.map((x) => {
          return (
            <li key={x.name}>
              {icon ? <img src={"/icons/" + x.icon + ".svg"} alt={x.icon} /> : null}
              <span>{x.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}