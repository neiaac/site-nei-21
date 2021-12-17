import { button, black, blue } from './button.module.scss';

const colors = { black, blue };

export default function Button({ text, color, handler }) {
  return <button onClick={handler} className={`${button} ${colors[color]}`}>{text}</button>;
}
