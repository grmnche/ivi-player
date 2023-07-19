import React, {Fragment, useState, useEffect} from 'react';
import Navbar from '../../components/Navbar.jsx';
import { BooksHolmov } from '../../components/holmov/BooksHolmov.jsx';
import Aos from 'aos';
import "aos/dist/aos.css";

import "../../images/activation-point1.jpg"
import "../../images/activation-point2.jpg"

export const BookStoreHolmov = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    const [bookCardsHolmov, setBookCardsHolmov] = useState([
        {
          id: 1,
          title: 'Танец со стулом',
          series: 'Точка активации',
          bookNumber: 'Книга 1',
          description:
            'Опасен ли прогресс для человечества? Техногенная катастрофа? Бунт машин? Вы серьезно? Мы же только из-за прогресса и живы до сих пор. Давайте не будем. Считайте, мы в океане, выбрали курс — все, надо плыть. Тем более, завтра с утра на работу... В конце 22 века в английской деревушке Мейденс Грин, в обычной семье росли двое мальчишек. Беда положила конец счастливому детству. Братьям предстоит искать свое место в мире, где уже до их рождения все было далеко не в порядке... А в это время Кэрол просто хочет спать.',
          image:
            './images/activation-point1.jpg',
        },
        {
          id: 2,
          title: 'Маленький кирпичный дом',
          series: 'Точка активации',
          bookNumber: 'Книга 2',
          description:
            'Продолжение истории братьев Барнетов и другой публики мрачного Лондона 2200-х. Что решит Дэвид, лучший андроид-инженер Великобритании? Будет ли Кейси ночевать под мостом? Куда девалась Ада Ройзбах? Какую тайну хранит Великий и Непостижимый Гроссмайер и что замышляет злобный министр Данкрофт? Удастся ли пакерам... Тс-с-с. И Кэрол, оставленная нами у окна в одиночестве и растерянности... Станет ли она "Еленой-X", как мечтала, или пойдет по другому пути? И какое будущее ждет андроидов - а с ними и всю страну?',
          image:
            './images/activation-point2.jpg',
        }
      ]);


    return (
        <Fragment>
            <Navbar />

            <BooksHolmov bookCardsHolmov={bookCardsHolmov} />
        </Fragment>
    )
}