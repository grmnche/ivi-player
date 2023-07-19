import React, { useState } from 'react';

import "../images/logo-text.svg"


export default function Greet() {
  return (
    <div
      data-aos="fade-up"
      className="cyber-text-container w-11/12 mx-auto"
    >
      <div className="mt-96 md:ml-28 lg:ml-52">
        <img
          className="w-full md:w-2/3 lg:w-2/3"
          src="./images/logo-text.svg"
          alt=""
        />
        <div className='grid'>
          <span
            data-text="Писатель 2.0"
            className="cyber-text glitch layers w-11/12 lg:w-2/3 mt-8 tracking-widest font-thin text-2xl lg:text-3xl"
          >
            Писатель 2.0
          </span>
          <span
            data-text="Мы создаём непохожую литературу. Мы пишем - вы читаете."
            className="cyber-text glitch layers w-11/12 lg:w-2/3 mt-4 tracking-widest font-thin text-2xl lg:text-3xl"
          >
            Мы создаём непохожую литературу. Мы пишем - вы читаете.
          </span>
        </div>
      </div>
    </div>
  );
}