import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import '../styles/main.scss';

function Navbar() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [isActiveLib, setIsActiveLib] = useState(false);

  function libHandler() {
    setIsActiveLib((isActiveLib) => !isActiveLib);
  }

  const [isActiveBooks, setIsActiveBooks] = useState(false);

  function booksHandler() {
    setIsActiveBooks((isActiveBooks) => !isActiveBooks);
  }

  return (
    <nav
      data-aos="fade-down"
      className="z-10 h-10 mt-12 text-center fixed top-0 left-0 bottom-0 right-0"
    >
      <input className="checkbox" type="checkbox" name="" id="" />
      <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>

      <div className="nav-logo">
        <img
          className="w-40 lg:48 inline-block"
          src="https://raw.githubusercontent.com/grmnche/images/97810d95c1887aff2a6d35e8639d291c448498bf/cybervarius/logo.svg"
          alt=""
        />
      </div>

      <ul className="nav-list text-lg md:text-xl lg:text-2xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-link mx-2 nav-link-shadow active' : 'nav-link mx-2'
          }
          to="/"
          end
        >
          <li className="nav-item">
            <div className="nav-link-inner">Главная</div>
          </li>
        </NavLink>
        <div
          onMouseEnter={libHandler}
          onMouseLeave={libHandler}
          className="nav-lib lg:h-28 mx-2 inline-block"
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'nav-link nav-link-shadow active w-full'
                : 'nav-link w-full'
            }
            to="/libAuthors"
          >
            <li className="nav-item">
              <div className="nav-link-inner">Библиотека</div>
            </li>
          </NavLink>

          <div
            className={isActiveLib ? 'lib-chapters hidden lg:block' : 'fade'}
          >
            <NavLink to="/libChernyshev">
              <div className="nav-lib-chernyshev mt-2 p-1 absolute left-0">
                <img className="w-10" src="./images/chernyshev.png" alt="" />
              </div>
            </NavLink>

            <NavLink to="/libHolmov">
              <div className="nav-lib-holmov mt-2 p-1 absolute right-0">
                <img className="w-10" src="./images/holmov.png" alt="" />
              </div>
            </NavLink>
          </div>
        </div>

        <div
          onMouseEnter={booksHandler}
          onMouseLeave={booksHandler}
          className="nav-books mx-2 lg:h-28 inline-block"
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'nav-link nav-link-shadow active w-full'
                : 'nav-link w-full'
            }
            to="/booksAuthors"
          >
            <li className="nav-item">
              <div className="nav-link-inner">Книжная лавка</div>
            </li>
          </NavLink>

          <div
            className={
              isActiveBooks ? 'books-chapters hidden lg:block' : 'fade'
            }
          >
            <NavLink to="/booksChernyshev">
              <div className="nav-lib-chernyshev mt-2 p-1 absolute left-0">
                <img className="w-10" src="./images/chernyshev.png" alt="" />
              </div>
            </NavLink>

            <NavLink to="/booksHolmov">
              <div className="nav-lib-holmov mt-2 p-1 absolute right-0">
                <img className="w-10" src="./images/holmov.png" alt="" />
              </div>
            </NavLink>
          </div>
        </div>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-link mx-2 nav-link-shadow active' : 'nav-link mx-2'
          }
          to="/about"
        >
          <li className="nav-item">
            <div className="nav-link-inner">О Кибервариусе</div>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
