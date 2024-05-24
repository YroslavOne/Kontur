import cn from "classnames";
import React from "react";
import styles from "./Input.module.css";

function Input({ title, placeholder }) {
  return (
    <div className={styles["div"]}>
      <p className={styles["title"]}>{title}</p>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
export default Input;
