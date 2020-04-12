import React, { useState, useEffect } from 'react';
import {
  FaGlobe, FaSms, FaUserCircle, FaPaperPlane, FaEnvelope, FaPowerOff,
} from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import crypto from 'crypto';

import socket from '../../services/socket';

import './styles.css';

export default function Chat() {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [userColor, setUserColor] = useState('');
  const history = useHistory();

  socket.on('newConnection', (connections) => {
    setOnlineUsers(connections);
  });

  socket.on('receivedMessage', (messageData) => {
    setMessages(messageData);
  });

  socket.on('userHaveBeenDisconnected', (connections) => {
    setOnlineUsers(connections);
  });

  useEffect(() => {
    socket.connect();

    socket.on('previousConnections', (connections) => {
      setOnlineUsers(connections);
    });

    socket.on('previousMessages', (messageData) => {
      setMessages(messageData);
    });

    setUserColor(`#${crypto.randomBytes(3).toString('HEX')}`);
  }, []);

  return (
    <>
      <div className="chat-container">
        <section className="user-box">
          <h1>
            Real Time Chat
            &nbsp;
            <FaSms color="#FF9F1C" />
          </h1>

          <div>
            <FaGlobe color="#39B54A" />
            <strong>
              Outros Usuários Online (
              {onlineUsers.length}
              )
            </strong>

            {onlineUsers.map((connection) => (
              <p>
                <FaUserCircle color="#FFFFFF" />
                &nbsp;
                {`#${connection.id}`}
              </p>
            ))}
          </div>

          <input
            type="text"
            placeholder="Como deseja ser chamado?"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </section>

        <main className="message-box">
          <div>
            {messages.map((messageData) => (
              <span
                key={messageData.id}
                style={messageData.userId === socket.id ? { marginLeft: 'auto' } : { marginRight: 'auto' }}
              >
                <strong style={{ color: messageData.color }}>
                  <FaEnvelope color={messageData.color} />
                  &nbsp;
                  {messageData.username}
                  <code style={{
                    fontSize: 10,
                    marginLeft: 5,
                  }}
                  >
                    #
                    {messageData.userId}
                  </code>
                </strong>
                <p>{messageData.message}</p>
              </span>
            ))}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();

              if (username.length && message.length) {
                const messageData = {
                  userId: socket.id,
                  color: userColor,
                  username,
                  message,
                };

                setMessages([...messages, messageData]);

                socket.emit('newMessage', messageData);

                setMessage('');
              }
            }}
          >
            <button
              type="button"
              onClick={() => {
                socket.emit('userDisconnected', { id: socket.id });

                socket.disconnect();

                history.goBack();
              }}
            >
              <FaPowerOff color="#FFFFFF" size={30} />
            </button>
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
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
