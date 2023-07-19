import React, { useState, useEffect } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { LibAuthors } from './pages/LibAuthors.jsx';
import { About } from './pages/About.jsx';
import { BookAuthors } from './pages/BookAuthors.jsx';
import { BookStoreChernyshev } from './pages/chernyshev/BookStoreChernyshev.jsx';
import { LibChernyshev } from './pages/chernyshev/LibChernyshev.jsx';
import { LibHolmov } from './pages/holmov/LibHolmov.jsx';
import { BookStoreHolmov } from './pages/holmov/BookStoreHolmov.jsx';
import Footer from './components/Footer.jsx';


function App() {
  

  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path={'/'} exact Component={Home} />
          <Route path={'/libAuthors'} Component={LibAuthors} />
          <Route path={'/booksAuthors'} Component={BookAuthors} />
          <Route path={'/about'} Component={About} />

          <Route path={'/booksChernyshev'} exact Component={BookStoreChernyshev} />
          <Route path={'/booksHolmov'} exact Component={BookStoreHolmov} />

          <Route path={'/libChernyshev'} exact Component={LibChernyshev} />
          <Route path={'/libHolmov'} exact Component={LibHolmov} />
        </Routes>

      <Footer />

      </div>
    </HashRouter>
  );
}

export default App;
