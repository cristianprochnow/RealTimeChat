import React from 'react';

import socket from './services/socket';

import Chat from './pages/Chat';

import './global.css';

export default function App() {
  socket.connect();

  return(
    <Chat />
  );
}
