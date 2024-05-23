import styles from './Element.module.css'

function Element({image, title, description}){
return(
    <div className={styles["div"]}>
<img className={styles["image"]} src={image} alt="" />
<h4 className={styles["title"]}>{title}</h4>
<p className={styles["description"]}>{description}</p>
    </div>
)
}
export default Element