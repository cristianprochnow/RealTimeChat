import React from 'react';
import { FaGlobe, FaSms, FaUserCircle } from 'react-icons/fa';

import './styles.css';

export default function Chat() {
  return (
    <>
      <div className="chat-container">
        <section className="user-box">
          <h1>
            Real Time Chat &nbsp;
            <FaSms color="#FF9F1C" size={30} />
          </h1>

          <div>
            <FaGlobe color="#39B54A" size={18} />
            <strong>Usuários Online (20)</strong>

            <p>
              <FaUserCircle color="#FFFFFF" size={15} />
              &nbsp;
              Algusto Alberto
            </p>
            <p>
              <FaUserCircle color="#FFFFFF" size={15} />
              &nbsp;
              Carlos Alberto ajsndjkasndksa nasjdknasjkd nasjkdnasd nkijasdnd
            </p>
            <p>
              <FaUserCircle color="#FFFFFF" size={15} />
              &nbsp;
              Sara Menezes
            </p>
          </div>

          <input
            type="text"
            placeholder="Insira seu nome..."
          />
        </section>

        <main className="message-box">
          <div>
            <span>
              <strong>Autor</strong>
              <p>Mensagem show pacaramba</p>
            </span>

            <span>
              <strong>Autor</strong>
              <p>Mensagem show pacaramba</p>
            </span>

            <span>
              <strong>Autor</strong>
              <p>Mensagem show pacaramba</p>
            </span>

            <span>
              <strong>Autor</strong>
              <p>Mensagem show pacaramba</p>
            </span>
          </div>

          <input
            type="text"
            placeholder="Digite sua mensagem"
          />
        </main>
      </div>
    </>
  );
}
