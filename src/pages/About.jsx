import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export const About = () => {
  const cardsAbout = [
    {
      id: 1,
      name: 'Авторы',
      description:
        'На Кибервариусе мы представляем Германа Чернышёва и Александра Холмова. Это ресурс авторов.',
    },
    {
      id: 2,
      name: 'Библиотека',
      description:
        'Все книги в библиотеке Кибервариуса можно читать свободно и бесплатно. Библиотека регулярно пополняется. Новые произведения по возможности сразу размещаются здесь.',
    },
    {
      id: 3,
      name: 'Книжная лавка',
      description:
        'В книжной лавке Кибервариуса находятся все книги авторов, изданные в электронном виде и доступные к покупке на сегодня. Мы предлагаем их вам по самой низкой цене. Приобретая книги здесь, вы платите напрямую авторам. Мы гарантируем полную безопасность и удобство заказа.',
    },
    {
      id: 3,
      name: 'Книжная лавка',
      description:
        'В книжной лавке Кибервариуса находятся все книги авторов, изданные в электронном виде и доступные к покупке на сегодня. Мы предлагаем их вам по самой низкой цене. Приобретая книги здесь, вы платите напрямую авторам. Мы гарантируем полную безопасность и удобство заказа.',
    },
  ];

  const cardsAboutOther = [
    {
      id: 1,
      name: 'Как купить',
      description:
        'Чтобы приобрести книгу, просто напишите на order@cybervarius.ru. Укажите название. Вам придет ответное письмо с номером карты для перевода. После оплаты книга будет выслана на ваш E-mail.',
    },
    {
      id: 2,
      name: 'О ценах и скидках',
      description:
        'Книги продаются без посредничества издательских платформ. Мы не используем платежных систем. На некоторые книги вы можете назначить свою цену. Возможны индивидуальные скидки.',
    },
    {
      id: 3,
      name: 'Форматы электронных книг',
      description:
        'Мы высылаем книги в формате PDF, а также по вашему запросу - в любых популярных форматах — EPUB, MOBI, FB2 и др. Если книга не открылась на вашем устройстве, напишите на order@cybervarius.ru или на support@cybervarius.ru, мы поможем.',
    },
  ];

  useEffect(() => {
    const cardsAbout = document.querySelectorAll('.about-btn');

    cardsAbout.forEach((cardAbout) => {
      cardAbout.onclick = clickP;
    });

    function clickP(evt) {
      cardsAbout.forEach((cardAbout) => {
        cardAbout.classList.remove('active-scale-about');
        cardAbout.parentNode.lastChild.classList.add('hide');
      });
      evt.target.classList.toggle('active-scale-about');
    }
  });

  const handleClick = (event) => {
    if (event.currentTarget.classList.contains('active-scale-about')) {
      event.currentTarget.parentNode.lastChild.classList.remove('hide');
    } else {
      event.currentTarget.parentNode.lastChild.classList.add('hide');
    }
  };

  function AboutCard({ index }) {
    return (
      <div className="mx-auto mb-8 w-full lg:w-11/12">
        <div
          onClick={handleClick}
          className="about-btn my-8 mx-auto lg:mx-4 p-3 text-center text-3xl"
        >
          {cardsAbout[index].name}
        </div>
        <p className="description-about lg:absolute hide p-6 lg:p-12 my-8 font-thin text-2xl">
          {cardsAbout[index].description}
        </p>
      </div>
    );
  }

  function AboutOther({ index }) {
    return (
      <div className="w-full">
        <div className="about-other-btn w-1/2 my-8 text-5xl">
          {cardsAboutOther[index].name}
        </div>
        <p className="description-about-other pb-10 font-thin text-2xl">
          {cardsAboutOther[index].description}
        </p>
      </div>
    );
  }

  return (
    <Fragment>
      <Navbar />

      <div
        data-aos="fade-up"
        className="about mt-40 lg:mb-24 lg:mt-56 w-11/12 mx-auto"
      >
        <div className="lg:flex justify-between">
          <AboutCard index={0} />
          <AboutCard index={1} />
          <AboutCard index={2} />
        </div>

        <div className="about-other mt-32 lg:mt-72">
          <AboutOther index={0} />
          <AboutOther index={1} />
          <AboutOther index={2} />
        </div>
      </div>
      
    </Fragment>
  );
};
