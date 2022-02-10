import { button, black, blue, grey } from './button.module.scss';

const colors = { black, blue, grey };

const Button = ({ text, color, handler, isDisabled }) => (
  <button onClick={handler} className={`${button} ${colors[color]}`} disabled={isDisabled}>
    {text}
  </button>
);

export default Button;
