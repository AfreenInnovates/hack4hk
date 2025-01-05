/* eslint-disable react/react-in-jsx-scope */

import { useState } from 'react';
import io from 'socket.io-client';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import MessageChat from './MessagesChat';

const socket = io('http://localhost:5000');
export default function Chating() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      console.log(username, room);
      socket.emit('joinRoom', room);
      setIsJoined(true);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {!isJoined ? (
        <div className="flex flex-col items-center justify-center gap-2">
          <h3>Join A Chat</h3>
          <Input type="text" id="username" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
          <Input type="text" id="room" placeholder="Enter Room Name" onChange={(e) => setRoom(e.target.value)} />
          <Button onClick={joinRoom}>Join a Room</Button>
        </div>
      ) : (
        <MessageChat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}
