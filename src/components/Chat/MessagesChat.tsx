/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

/* eslint-disable react/react-in-jsx-scope */
export default function MessageChat({ socket, username, room }: any) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messagesList, setMessagesList] = useState<any[]>([]);
  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messagesData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date().toLocaleTimeString(),
      };

      // Add the message locally to the sender's chat
      setMessagesList((list) => [...list, messagesData]);

      // Emit the message to the server
      socket.emit('sendMessage', messagesData);

      // Clear the input field
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    socket.on('receiveMessage', (data: any) => {
      setMessagesList((messagesList) => {
        if (!messagesList.some((msg) => msg.time === data.time && msg.author === data.author)) {
          return [...messagesList, data];
        }
        return messagesList;
      });
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, [socket]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        {messagesList.map((message, index) => (
          <div key={index} className="message flex flex-col">
            <p>{message.author}</p>
            <p>{message.message}</p>
            <p>{message.time}</p>
          </div>
        ))}
      </div>
      <div className="chat-footer flex flex-row">
        <Input type="text" id="message" placeholder="Enter Message" onChange={(e) => setCurrentMessage(e.target.value)} />
        <Button onClick={sendMessage}>&#10148;</Button>
      </div>
    </div>
  );
}
