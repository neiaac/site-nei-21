import { button, black, blue, grey } from './button.module.scss';

const colors = { black, blue, grey };

const Button = ({ text, color, handler }) => (
  <button onClick={handler} className={`${button} ${colors[color]}`}>
    {text}
  </button>
);

export default Button;
