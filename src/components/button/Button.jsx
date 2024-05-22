import styles from './Button.module.css';

function Button({ text, style }) {
  return (
    <button className={styles[style]}>
      <div>{text}</div>
    </button>
  );
}
export default Button;
