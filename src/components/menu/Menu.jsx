import styles from './Menu.module.css';

function Menu() {
  return (
    <menu>
      <div className={styles['logo-and']}>
        <a href="/">
          <div className={styles['logo']}></div>
        </a>
        <ul className={styles['ul']}>
          <li>Чему вы научитесь</li>
          <li>Процесс обучения</li>
          <li>Стоимость</li>
          <li>Контакты</li>
        </ul>
      </div>
      <a href="tel:+7 (499) 348 93 96">+7 (499) 348 93 96</a>
    </menu>
  );
}

export default Menu;
