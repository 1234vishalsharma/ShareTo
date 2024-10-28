import React, { useState } from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:5000'); // Replace with your server URL

const Sender = () => {
  const [roomID, setRoomID] = useState('');
  const [file, setFile] = useState(null);

  const handleRoomJoin = () => {
    socket.emit('sender-join', roomID);
    console.log('Sender joined room: ', roomID);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const sendFile = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const data = {
          roomID,
          file: reader.result,
        };
        socket.emit('data', data);
        console.log('File sent to room: ', roomID);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='text-white'>
      <h2>Sender</h2>
      <input
        type="text"
        className='text-black'
        value={roomID}
        placeholder="Enter Room ID"
        onChange={(e) => setRoomID(e.target.value)}
      />
      <button onClick={handleRoomJoin}>Join Room</button>
      <br />
      <input type="file" onChange={handleFileChange} />
      <button onClick={sendFile}>Send File</button>
    </div>
  );
};

export default Sender;
