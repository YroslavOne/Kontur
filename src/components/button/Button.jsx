import styles from "./Button.module.css";
import cn from "classnames";

function Button({ text, style, className, setCallBack, open }) {
  function openWindow(value) {
    setCallBack(value);
  }

  return (
    <button
      onClick={(e) => openWindow(open)}
      className={cn(styles["button"], className)}
    >
      <div>{text}</div>
    </button>
  );
}
export default Button;
