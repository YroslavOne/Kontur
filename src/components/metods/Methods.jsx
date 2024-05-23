import styles from "./Methods.module.css";
import men from "../../../public/image/methods/1.png";
import women from "../../../public/image/methods/2.png";
import CardMethods from "./cardMethods/CardMethods";

function Methods() {
  const arrMethods = [
    {
      image: men,
      title: "Помощь и поддержка",
      description: (
        <>
          <span>Если в процессе обучения возникнут сложности, вы всегда сможете задать
          вопрос своему наставнику. </span><br /> Раз в несколько уроков вы будете
          получать большое задание, которое нужно будет сдавать на проверку
          код-ревьюеру. Он внимательно изучит ваш код, найдет ошибки и поможет
          вам стать лучше.{" "}
        </>
      ),
      key: 1,
      class: "men",
    },
    {
      image: women,
      title: "Методика обучения",
      description:
        "Весь учебный материал структурирован по принципу «спирального обучения». Сначала вы получаете базовые знания, а затем на каждом витке спирали углубляетесь в изученные темы, доводя их понимание до совершенства. Такой подход упрощает обучение и гарантирует, что вы не пропустите ничего важного.",
      key: 2,
      class: "women",
    },
  ];

  return (
    <div className={styles["div"]}>
      {arrMethods.map((el) => 
        <CardMethods
        key={el.key}
          image={el.image}
          className={el.class}
          title={el.title}
          description={el.description}
        />
      )}
    </div>
  );
}
export default Methods;
