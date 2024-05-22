import styles from './Card.module.css';
import Button from '../../button/Button';

function Card({ title, description, styleImg }) {
  return (
    <div className={styles['card']}>
      <div>
        <h2 className={styles['h2']}>{title}</h2>
        <hr
          align="left"
          width="365px"
          size="1"
          color="#DEDEDE
"
        />
        <p className={styles['p']}>{description}</p>
        <Button style="button" text="Заказать звонок" />
      </div>
      <div className={styles[styleImg]}></div>
    </div>
  );
}
export default Card;
