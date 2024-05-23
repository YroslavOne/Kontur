import styles from './Menu.module.css';

function Menu() {
  return (
    <menu>
      <div className={styles['logo-and']}>
        <a href="/">
          <div className={styles['logo']}></div>
        </a>
        <ul className={styles['ul']}>
          <li><a className={styles['a']} href='/'>Чему вы научитесь</a></li>
          <li><a className={styles['a']} href='/'>Процесс обучения</a></li>
          <li><a className={styles['a']} href='/'>Стоимость</a></li>
          <li><a className={styles['a']} href='/'>Контакты</a></li>
        </ul>
      </div>
      <a href="tel:+7 (499) 348 93 96">+7 (499) 348 93 96</a>
    </menu>
  );
}

export default Menu;
