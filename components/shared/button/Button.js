import { button, black, blue, grey } from './button.module.scss';

const colors = { black, blue, grey };

export default function Button({ text, color, handler }) {
  return <button onClick={handler} className={`${button} ${colors[color]}`}>{text}</button>;
}
