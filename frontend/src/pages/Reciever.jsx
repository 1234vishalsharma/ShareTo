import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Header from '../components/Header';
// const socket = io('https://shareto.onrender.com'); // Replace with your server URL
const socket = io('http://localhost:5000'); // Replace with your server URL

const Receiver = () => {
  const [roomID, setRoomID] = useState('');
  const [receivedFile, setReceivedFile] = useState(null);
  const [roomJoined, setRoomJoined] = useState(false);
  const [metadata, setMetaData] = useState(null);

  const handleRoomJoin = () => {
    if (roomID.trim()) {
      socket.emit('receiver-join', roomID);
      console.log('Receiver joined room: ', roomID);
      setRoomJoined(true);
    }
  };

  useEffect(() => {
    socket.on('data', (data) => {
      console.log('Data received: ', data);
      setReceivedFile(data.file);
    });
    socket.on('meta-data', (data) => {
      console.log('Metadata received: ', data);
      setMetaData(data);
    });

    return () => {
      socket.off('data');
      socket.off('meta-data');
    };
  }, []);

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = receivedFile;
    link.download = metadata?.name || 'received_file';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("File downloaded successfully!");
  };

  const resetRoom = () => {
    setRoomID('');
    setRoomJoined(false);
    setMetaData(null);
    setReceivedFile(null);
    alert("Room reset successfully!");
  };

  return (
    <>
      <Header />
      <div className='text-white flex flex-col justify-center items-center gap-5 h-screen bg-black'>
        <h2 className='text-yellow-500 font-semibold text-2xl'>You are a Receiver:</h2>

        {/* Room ID Input */}
        <div className='flex gap-4'>
          <input
            type="text"
            value={roomID}
            className="text-black p-2 outline-none rounded-md"
            placeholder="Enter Room ID"
            onChange={(e) => setRoomID(e.target.value)}
          />
          <button
            className='text-white font-bold p-3 bg-yellow-500 border-2 rounded-md border-white'
            onClick={handleRoomJoin}
            disabled={roomJoined}
          >
            {roomJoined ? "Room Joined" : "Join Room"}
          </button>
        </div>

        {/* Room Status */}
        {roomJoined && (
          <p className='text-sm text-gray-400'>
            Room joined successfully! Waiting for the file...
          </p>
        )}

        {/* File Metadata */}
        {metadata && (
          <div className='mt-4 text-center'>
            <p className='text-yellow-400 text-lg'>File Details:</p>
            <p className='text-gray-300'>Name: <span className='text-yellow-500'>{metadata.name}</span></p>
            <p className='text-gray-300'>Size: <span className='text-yellow-500'>{(metadata.size / 1024).toFixed(2)} KB</span></p>
          </div>
        )}

        {/* File Download Section */}
        {roomJoined && receivedFile && (
          <div className='flex flex-col items-center gap-4 mt-5'>
            <h3 className='text-green-400 font-semibold'>File Received Successfully!</h3>
            <button
              className='p-3 bg-yellow-500 rounded-md border-2 border-white'
              onClick={downloadFile}
            >
              Download File
            </button>
          </div>
        )}

        {/* Reset Room */}
        {roomJoined && (
          <button
            className='text-white font-bold p-2 bg-red-500 border-2 rounded-md border-white mt-4'
            onClick={resetRoom}
          >
            Reset Room
          </button>
        )}
      </div>
    </>
  );
};

export default Receiver;
