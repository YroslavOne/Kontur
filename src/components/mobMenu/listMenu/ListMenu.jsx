import { links } from '../../LinksForMenu';
import close from '../../../../public/image/Close.png';
import styles from './ListMenu.module.css';
import cn from 'classnames';
import { useState } from 'react';

function ListMenu({ setOpen }) {
  const closeWindow = function () {
    setOpen(false);
  };
  return (
    <div className={styles['div']}>
      <div className={styles['close']}>
        <img onClick={closeWindow} src={close} alt="" />
      </div>
      <ul>
        {links.map((link) => (
          <li key={link.key}>
            <a className={styles['a']} href="/">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListMenu;
