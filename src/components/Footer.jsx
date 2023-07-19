import React, { useState } from 'react';
import '../images/tg-clean.png';

export default function Footer() {
  return (
    <div className="footer mt-auto">
      <div className="p-10">
        <a className="telegram" href="https://t.me/cybervarius">
          <img className="w-6 inline" src="./images/tg-clean.png" alt="" />
        </a>
        <p className="copyright text-lg pt-6">© 2023 Герман Чернышёв</p>
      </div>
    </div>
  );
}
