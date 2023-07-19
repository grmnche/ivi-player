import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import 'aos/dist/aos.css';

export function BooksChernyshev(props) {
  const ref = useRef(null);
  const refPrev = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.book-card-inner');

    cards.forEach((card) => {
      card.onclick = clickP;
    });

    function clickP(evt) {
      cards.forEach((card) => {
        card.classList.remove('active-scale');
        card.parentNode.lastChild.classList.add('hide');
      });
      evt.target.classList.toggle('active-scale');
    }
  });

  const handleClick = (event) => {
    if (event.currentTarget.classList.contains('active-scale')) {
      event.currentTarget.parentNode.lastChild.classList.remove('hide');
    } else {
      event.currentTarget.parentNode.lastChild.classList.add('hide');
    }
  };

  return (
    <div className="stories-outer mt-32 lg:mt-48 mx-auto w-11/12">
      <div className="book-list w-11/12">
        <Book className="book-card" index="0" />
        <Book className="book-card" index="1" />
        <Book className="book-card" index="2" />
        <Book className="book-card" index="3" />
      </div>
    </div>
  );

  function Book({ className, index }) {
    return (
      <div className={`${className} pb-2`}>
        <div
          ref={ref}
          onClick={handleClick}
          type="button"
          className="book-card-inner sm:block mb-6 lg:mb-12 w-full lg:w-2/5 p-3 lg:p-6 text-2xl lg:text-3xl"
        >
          {props.bookCardsChernyshev[index].title}{' '}
          <div className="additionally">
            <span className="series text-lg lg:text-xl">
              {props.bookCardsChernyshev[index].series}
            </span>{' '}
            <span className="number text-lg lg:text-xl">
              {props.bookCardsChernyshev[index].bookNumber}
            </span>
          </div>
        </div>

        <div
          ref={refPrev}
          className={`book-preview my-8 lg:mt-48 lg:top-0 lg:right-8 p-8 preview${index} hide static lg:absolute w-full lg:w-1/2`}
        >
          <img
            src={props.bookCardsChernyshev[index].image}
            className="book-image w-60 lg:w-72 mx-auto"
          />
          <div className="book-btn w-full mt-8 p-1 lg:p-2 text-2xl lg:text-3xl mx-auto">
            Читать фрагмент
          </div>
          <p className="font-thin mt-4 mx-auto">
            <span className="series-header text-xl lg:text-2xl">Цикл:</span>{' '}
            <span className="book-series text-2xl lg:text-3xl">
              {props.bookCardsChernyshev[index].series}
            </span>
          </p>
          <p className="book-number font-thin mt-4 text-2xl lg:text-3xl mx-auto">
            {props.bookCardsChernyshev[index].bookNumber}
          </p>
          <p className="mt-6 font-thin text-xl lg:text-2xl">
            {props.bookCardsChernyshev[index].description}
          </p>
          <div className="quote w-full italic font-thin mt-8 text-xl mx-auto">
            {props.bookCardsChernyshev[index].quote}
          </div>
        </div>
      </div>
    );
  }
}

BooksChernyshev.propTypes = {
  bookCardsChernyshev: PropTypes.arrayOf(PropTypes.object).isRequired,
};
