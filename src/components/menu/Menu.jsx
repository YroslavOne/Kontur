import { links } from '../LinksForMenu';
import styles from './Menu.module.css';

function Menu() {
  return (
    <menu className={styles['menu']}>
      <div className={styles['logo-and']}>
        <a href="/">
          <div className={styles['logo']}></div>
        </a>
        <ul className={styles['ul']}>
          {links.map((link) => (
            <li key={link.key}>
              <a className={styles['a']} href="/">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a className={styles['phone']} href="tel:+7 (499) 348 93 96">
        +7 (499) 348 93 96
      </a>
    </menu>
  );
}

export default Menu;
