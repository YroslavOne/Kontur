import styles from './Button.module.css';
import cn from 'classnames';

function Button({ text, style, className }) {
  return (
    <button className={cn(styles['button'], className)}>
      <div>{text}</div>
    </button>
  );
}
export default Button;
