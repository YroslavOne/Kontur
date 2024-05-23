import styles from './MobMenu.module.css';

function MobMenu({ setOpen }) {
  const openWindow = function () {
    setOpen(true);
    console.log('hi');
  };

  return (
    <menu className={styles['menu']}>
      <div className={styles['logo']}>
        <span>C</span>o<span>D</span>e
      </div>
      <a className={styles['phone']} href="tel:+7 (499) 348 93 96">
        +7 (499) 348 93 96
      </a>
      <button onClick={openWindow} className={styles['button']}>
        <hr />
        <hr />
        <hr />
      </button>
    </menu>
  );
}
export default MobMenu;
