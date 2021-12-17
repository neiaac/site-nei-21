import { member } from "./member.module.scss";

export default function Member({ name, role, photo }) {
  return (
    <div className={member}>
      <img src={photo ? photo + ".JPG" : "black.png"} alt="" />
      <span>{name}</span>
      <span>{role}</span>
    </div>
  );
}