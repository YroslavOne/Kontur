import cn from "classnames";
import styles from "./CardMethods.module.css";

function CardMethods({ key, image, className, title, description }) {
  return (
    <div key={key} className={cn(styles["div"], className=== "women" ? styles["women"]: "")}>
      <img className={styles["img"]} src={image} alt="" />
      <div className={styles["text"]}>
        <h3 className={styles["title"]}>{title}</h3>
        <p className={styles["description"]}>{description}</p>
      </div>
    </div>
  );
}
export default CardMethods;
