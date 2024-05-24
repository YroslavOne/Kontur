import logo from "./../../../public/image/CoDe.png";
import inst from "./../../../public/image/icon/inst.png";
import vk from "./../../../public/image/icon/vk.png";
import face from "./../../../public/image/icon/face.png";
import you from "./../../../public/image/icon/you.png";
import styles from "./Footer.module.css";
import { links } from "../LinksForMenu";

function Footer() {
  const icons = [
    {
      key: 1,
      icon: inst,
    },
    {
      key: 2,
      icon: vk,
    },
    {
      key: 3,
      icon: face,
    },
    {
      key: 4,
      icon: you,
    },
  ];

  return (
    <footer className={styles["footer"]}>
      <div className={styles["logo-and-links"]}>
        <div className={styles["logo-and-icon"]}>
          <div className={styles["logo-and-text"]}>
            <p className={styles["logo"]}>
              {" "}
              <span>C</span>o<span>D</span>e
            </p>
            <p className={styles["description-for-logo"]}>
              Школа <br />
              программирования
            </p>
          </div>
          <div className={styles["icon"]}>
            <ul>
              {icons.map((icon) => (
                <li className={styles["icon-link"]} key={icon.key}>
                  {" "}
                  <img src={icon.icon} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles["links-and-contact"]}>
          <ul>
            {links.map((link) => (
              <li className={styles["link"]} key={link.key}>
                <a>{link.text}</a>
              </li>
            ))}
          </ul>
          <div className={styles["phone-and-mailto"]}>
            <a className={styles["phone"]} href="tel:+7 (999) 999 99 99">
              +7 (999) 999 99 99
            </a>
            <a className={styles["mailto"]} href="mailto:info@code.ru">
              info@code.ru
            </a>
          </div>
        </div>
      </div>

      <hr className={styles["line"]} />
      <div className={styles["past-line"]}>
        <div>
          <p className={styles["text"]}>© 2023 — Все права защищены</p>
        </div>
        <div className={styles["agreement"]}>
          <a href="/" className={styles["text"]}>
            Пользовательское соглашение
          </a>
          <a href="/" className={styles["text"]}>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
