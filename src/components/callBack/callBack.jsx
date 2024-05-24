import Input from "./input/Input";
import styles from "./CallBack.module.css";
import Button from "../button/Button";

function CallBack({ setCallBack }) {
  return (
    <div className={styles["block"]}>
      <div className={styles["form"]}>
        <h2 className={styles["title"]}>Заказать звонок</h2>
        <form>
          <Input title="Имя" placeholder="ваше  имя" />
          <Input title="Телефон" placeholder="+7 ХХХ - ХХХ - ХХ -ХХ" />
          <Input title="Email" placeholder="mail@site.com" />
          <div className={styles["div"]}>
            <p className={styles["title-for-text"]}>Сообщение</p>
            <textarea type="text" placeholder="Ваше сообщение ..." rows={2} />
          </div>
          <div>
            {" "}
            <p className={styles["text-footer"]}>
              Нажимая кнопку “Отправить”, соглашаюсь с <br />
              <span> политикой конфидениальности</span>
            </p>
            <Button
              setCallBack={setCallBack}
              open={false}
              text="Отправить"
              className={styles["button"]}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default CallBack;
