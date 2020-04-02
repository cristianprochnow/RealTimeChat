import React from 'react';

import './styles.css';

export default function Chat() {
  return(
    <>
      <div className="chat-container">
        <form onSubmit={() => {}}>
          <input
            type="text"
            placeholder="Insira seu nome"
            maxLength="40"
          />

          <section className="chat">
            <div className="chat-item">
              <strong>Autor da mensagem</strong>
              <p>Mensagem show da peasdasdasdasdasdsaddasdassdassoasdasdasddasa, que ela acabou de enviar, pra testar o negócio.</p>
            </div>

            <div className="chat-item">
              <strong>Autor da mensagem</strong>
              <p>Mensagem show da peasdasdasdasdasdsaddasdassdassoasdasdasddasa, que ela acabou de enviar, pra testar o negócio.</p>
            </div>

            <div className="chat-item">
              <strong>Autor da mensagem</strong>
              <p>Mensagem show da peasdasdasdasdasdsaddasdassdassoasdasdasddasa, que ela acabou de enviar, pra testar o negócio.</p>
            </div>

            <div className="chat-item">
              <strong>Autor da mensagem</strong>
              <p>Mensagem show da peasdasdasdasdasdsaddasdassdassoasdasdasddasa, que ela acabou de enviar, pra testar o negócio.</p>
            </div>

            <div className="chat-item">
              <strong>Autor da mensagem</strong>
              <p>Mensagem show da peasdasdasdasdasdsaddasdassdassoasdasdasddasa, que ela acabou de enviar, pra testar o negócio.</p>
            </div>

            <div className="chat-item">
              <strong>Autor da mensagem</strong>
              <p>Mensagem show da peasdasdasdasdasdsaddasdassdassoasdasdasddasa, que ela acabou de enviar, pra testar o negócio.</p>
            </div>

            <div className="chat-item">
              <strong>Autor da mensagem</strong>
              <p>Mensagem show da peasdasdasdasdasdsaddasdassdassoasdasdasddasa, que ela acabou de enviar, pra testar o negócio.</p>
            </div>
          </section>

          <input 
            type="text"
            placeholder="Digite sua mensagem"
          />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}
