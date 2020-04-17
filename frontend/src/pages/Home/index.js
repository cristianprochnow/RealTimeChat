import React from 'react';
import { Link } from 'react-router-dom';
import { FaSms } from 'react-icons/fa';

import './styles.css';

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>
          Synchat
          &nbsp;
          <FaSms color="#FFF" />
        </h1>
      </header>

      <Link to="/chat">Entrar no bate-papo</Link>
    </div>
  );
}
