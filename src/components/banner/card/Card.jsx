import styles from "./Card.module.css";
import Button from "../../button/Button";

function Card({ title, description, image, setCallBack }) {
  return (
    <div className={styles["card"]}>
      <div className={styles["block"]}>
        <h2 className={styles["h2"]}>{title}</h2>
        <hr
          align="center"
          size="1"
          color="#DEDEDE
"
        />
        <p className={styles["p"]}>{description}</p>
        <Button
          setCallBack={setCallBack}
          open={true}
          className={styles["button"]}
          text="Заказать звонок"
        />
      </div>
      <div className={styles["img"]}>
        <img src={image} />
      </div>
    </div>
  );
}
export default Card;
