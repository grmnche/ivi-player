import React from 'react';
import Buttons from './components/Buttons.jsx';
import Resolutions from './components/Resolutions.jsx';

function App() {
  return (
    <div id="App">
      {/* Для будущего header */}
      <header></header>

      <main>
        <section>
          <div className="player-outer">
            <div className="player">
              <p className="player-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis aut in autem veritatis ipsum rem eum quod velit,
                debitis suscipit natus, fuga aliquam est quam! Quaerat similique
                distinctio ipsum iusto?
              </p>
              <Resolutions />
            </div>

            <Buttons />
          </div>
        </section>
      </main>

      {/* Для будущего footer */}
      <footer></footer>
    </div>
  );
}

export default App;
