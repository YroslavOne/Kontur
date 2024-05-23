import styles from './Map.module.css'

function Map() {
  return (
    <div className={styles["div"]}>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A535f3b113d1d757277e246327b71bbee9023cb29307aab16670eeb875f15194b&amp;source=constructor"
        width="100%"
        height="400"
        frameborder="0"
        border-radius="30px"
      ></iframe>
    </div>
  );
}
export default Map;
