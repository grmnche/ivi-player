import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import 'aos/dist/aos.css';

export function StoriesChernyshev(props) {
  const ref = useRef(null);
  const refPrev = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.story-card-inner');

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

  // function cardActivation() {
  //   const cards = document.querySelectorAll('.story-card-inner');

  //   cards.forEach((card) => {
  //     card.onclick = clickP;
  //   });

  //   function clickP(evt) {
  //     cards.forEach((card) => {
  //       card.classList.remove('active-scale');
  //       card.lastChild.classList.add('hide');
  //     });
  //     evt.target.classList.toggle('active-scale');
  //   }
  // }

  return (
    <div className="stories-outer mt-32 lg:mt-48 mx-auto w-11/12">
      <div className="story-list w-11/12">
        <Card className="story-card" index="0" />
        <Card className="story-card" index="1" />
        <Card className="story-card" index="2" />
        <Card className="story-card" index="3" />
        <Card className="story-card" index="4" />
        <Card className="story-card" index="5" />
        <Card className="story-card" index="6" />
        <Card className="story-card" index="7" />
      </div>
    </div>
  );

  function Card({ className, index }) {
    return (
      <div className={`${className} pb-2`}>
        <div
          ref={ref}
          onClick={handleClick}
          type="button"
          className="story-card-inner sm:block mb-6 lg:mb-12 w-full lg:w-2/5 p-3 lg:p-6 text-2xl lg:text-3xl"
        >
          {props.storyCardsChernyshev[index].title} <span className='series text-lg lg:text-xl'>{props.storyCardsChernyshev[index].series}</span>
        </div>

        <div
          ref={refPrev}
          className={`story-preview my-8 lg:mt-48 lg:top-0 lg:right-8 p-8 preview${index} hide static lg:absolute w-full lg:w-1/2`}
        >
          <img
            src={props.storyCardsChernyshev[index].image}
            className="story-image w-60 lg:w-72 mx-auto"
          />
          <div className='story-btn w-full mt-8 p-1 lg:p-2 text-2xl lg:text-3xl mx-auto'>
            Читать
          </div>
          <p className="mt-6 font-thin text-xl lg:text-2xl">
            {props.storyCardsChernyshev[index].description}
          </p>
          <div className='quote w-full italic font-thin mt-8 text-xl mx-auto'>
          {props.storyCardsChernyshev[index].quote}
          </div>
        </div>
      </div>
    );
  }
}

StoriesChernyshev.propTypes = {
  storyCardsChernyshev: PropTypes.arrayOf(PropTypes.object).isRequired,
};
