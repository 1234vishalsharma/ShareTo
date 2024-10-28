import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:5000'); // Replace with your server URL

const Receiver = () => {
  const [roomID, setRoomID] = useState('');
  const [receivedFile, setReceivedFile] = useState(null);

  const handleRoomJoin = () => {
    socket.emit('receiver-join', roomID);
    console.log('Receiver joined room: ', roomID);
  };

  useEffect(() => {
    socket.on('data', (data) => {
      console.log('Data received: ', data);
      setReceivedFile(data.file);
    });

    return () => {
      socket.off('data');
    };
  }, []);

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = receivedFile;
    link.download = 'received_file';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='text-white'>
      <h2>Receiver</h2>
      <input
        type="text"
        value={roomID}
        className="text-black"
        placeholder="Enter Room ID"
        onChange={(e) => setRoomID(e.target.value)}
      />
      <button onClick={handleRoomJoin}>Join Room</button>
      <br />
      {receivedFile && (
        <div>
          <h3>File Received</h3>
          <button onClick={downloadFile}>Download File</button>
        </div>
      )}
    </div>
  );
};

export default Receiver;
