import styles from "./Edication.module.css";
import Element from "./element/Element";
import { ArrEdication } from "./ArrEdication";

function Edication() {
  return (
    <>
      <h1>Обучение в CoDe – это удобно и результативно</h1>
      <div className={styles["div"]}>
        {ArrEdication.map((el) => (
          <Element
            title={el.title}
            key={el.key}
            description={el.description}
            image={el.image}
          />
        ))}
      </div>
    </>
  );
}
export default Edication;
