import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './card/Card';
import styles from './Banner.module.css';
// import { ArrayBanner } from './ArrayBanner';

function Banner() {
  const slider = React.useRef(null);

  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };

  return (
    <div className={styles['banner']}>
      <Slider ref={slider} {...settings}>
        {ArrayBanner.map((element) => (
          <Card
            title={element.title}
            description={element.description}
            styleImg={element.classImg}
          />
        ))}
      </Slider>
      <button
        className={styles['prev']}
        onClick={() => slider?.current?.slickPrev()}
      ></button>
      <button
        className={styles['next']}
        onClick={() => slider?.current?.slickNext()}
      ></button>
    </div>
  );
}

export default Banner;

const ArrayBanner = [
  {
    title: (
      <>
        Школа <span>{'{'}</span>
        <span>программирования</span>
        <span>{'}'}</span> для тех, кому нужны реальные навыки, а не просто
        сертификат
      </>
    ),
    description:
      'Закажите звонок, и наш специалист свяжется с вами в ближайшее время',
    classImg: 'work',
  },
  {
    title: 'Обучение через практику',
    description:
      'Всё, что вы узнали, вы тут же начинаете применять на практике. Вы сразу видите результаты своего труда.',
    classImg: 'think',
  },
  {
    title: 'Весь материал разбит на небольшие уроки',
    description:
      'Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.',
    classImg: 'team',
  },
];
