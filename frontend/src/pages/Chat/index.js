import React from 'react';
import {
  FaGlobe, FaSms, FaUserCircle, FaPaperPlane, FaEnvelope,
} from 'react-icons/fa';

import './styles.css';

export default function Chat() {
  return (
    <>
      <div className="chat-container">
        <section className="user-box">
          <h1>
            Real Time Chat
            &nbsp;
            <FaSms color="#FF9F1C" size={30} />
          </h1>

          <div>
            <FaGlobe color="#39B54A" size={18} />
            <strong>Usuários Online (3)</strong>

            <p>
              <FaUserCircle color="#FFFFFF" size={15} />
              &nbsp;
              Algusto Alberto
            </p>
            <p>
              <FaUserCircle color="#FFFFFF" size={15} />
              &nbsp;
              Carlos Alberto
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
              <strong>
                <FaEnvelope color="#FF9F1C" size={15} />
                &nbsp;
                Autor
              </strong>
              <p>
                Mensagem show demais auhduas uhdua uahd asdh saudhasd sadhuad
              </p>
            </span>

            <span>
              <strong>
                <FaEnvelope color="#FF9F1C" size={15} />
                &nbsp;
                Autor
              </strong>
              <p>
                Mensagem show demais auhduas uhdua uahd asdh saudhasd sadhuad
              </p>
            </span>

            <span>
              <strong>
                <FaEnvelope color="#FF9F1C" size={15} />
                &nbsp;
                Autor
              </strong>
              <p>
                Mensagem show demais auhduas uhdua uahd asdh saudhasd sadhuad
              </p>
            </span>

            <span>
              <strong>
                <FaEnvelope color="#FF9F1C" size={15} />
                &nbsp;
                Autor
              </strong>
              <p>
                Mensagem show demais auhduas uhdua uahd asdh saudhasd sadhuad
              </p>
            </span>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="Digite sua mensagem..."
            />
            <button type="submit">
              <FaPaperPlane color="#FFFFFF" size={30} />
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
