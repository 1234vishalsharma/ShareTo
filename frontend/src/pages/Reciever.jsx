import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Header from '../components/Header';
import Header from '../components/Header'
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
      setRoomJoined(true);
    }
  const [roomJoined , setRoomJoined] = useState(false);
  const [metadata,setMetaData] = useState();
  const handleRoomJoin = () => {
    socket.emit('receiver-join', roomID);
    console.log('Receiver joined room: ', roomID);
    setRoomJoined(true);
  };

  useEffect(() => {
    socket.on('data', (data) => {
      setReceivedFile(data.file);
    });
    socket.on('meta-data', (data) => {

      console.log('Data received: ', data);
      setReceivedFile(data.file);
    });
    socket.on('meta-data', (data) => {
      console.log('meta-data received: ', data);
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
    alert('File downloaded successfully!');
  };

  const resetRoom = () => {
    setRoomID('');
    setRoomJoined(false);
    setMetaData(null);
    setReceivedFile(null);
    alert('Room reset successfully!');
    link.download = 'received_file';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header />
      <div className='h-screen w-full bg-black flex flex-col items-center justify-between p-10 text-white'>
        {/* Top Section */}
        <div className='w-full max-w-4xl flex flex-col items-center gap-4'>
          <h1 className='text-4xl font-bold text-yellow-400 text-center'>
            Receive Files Effortlessly
          </h1>
          <p className='text-gray-400 text-lg text-center'>
            Join a room, wait for the sender, and download files instantly.
          </p>
        </div>

        {/* Room Join Section */}
        <div className='w-full max-w-lg bg-gray-800 rounded-lg p-6 shadow-lg'>
          <h2 className='text-2xl font-semibold text-center text-yellow-400 mb-4'>
            {roomJoined ? 'Room Details' : 'Join a Room'}
          </h2>
          <div className='flex gap-3'>
            <input
              type='text'
              className={`flex-1 px-4 py-3 rounded-lg shadow ${
                roomJoined ? 'bg-gray-700 text-gray-300' : 'bg-white text-black'
              }`}
              placeholder='Enter Room ID'
              value={roomID}
              disabled={roomJoined}
              onChange={(e) => setRoomID(e.target.value)}
            />
            <button
              onClick={handleRoomJoin}
              className='px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-400'
              disabled={roomJoined}
            >
              {roomJoined ? 'Room Joined' : 'Join Room'}
            </button>
          </div>
          {roomJoined && (
            <p className='text-sm text-gray-400 mt-2'>Room joined successfully! Waiting for the file...</p>
          )}
        </div>

        {/* File Metadata Section */}
        {metadata && (
          <div className='w-full max-w-lg bg-gray-800 rounded-lg p-6 shadow-lg mt-6'>
            <h3 className='text-lg font-semibold text-yellow-400'>File Details</h3>
            <p className='text-gray-300 mt-2'>
              <span className='font-bold'>Name:</span> <span className='text-yellow-500'>{metadata.name}</span>
            </p>
            <p className='text-gray-300 mt-1'>
              <span className='font-bold'>Size:</span>{' '}
              <span className='text-yellow-500'>{(metadata.size / 1024).toFixed(2)} KB</span>
            </p>
          </div>
        )}

        {/* File Download Section */}
        {roomJoined && receivedFile && (
          <div className='flex flex-col items-center gap-4 mt-6'>
            <h3 className='text-green-400 font-semibold'>File Received Successfully!</h3>
            <button
              onClick={downloadFile}
              className='px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-400'
            >
              Download File
            </button>
          </div>
        )}

        {/* Reset Button */}
        {roomJoined && (
          <button
            onClick={resetRoom}
            className='w-full max-w-lg px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-400 mt-4'
          >
            Reset Room
          </button>
        )}
      </div>
    <Header/>
    <div className='text-white flex flex-col justify-center items-center gap-5 h-screen'>
      <h2 className='text-yellow-500 font-semibold text-2xl'>You are a Receiver :</h2>
      <div className='flex gap-4'>
        <input
          type="text"
          value={roomID}
          className="text-black p-2 outline-none rounded-md"
          placeholder="Enter Room ID"
          onChange={(e) => setRoomID(e.target.value)}
        />
        <button className='text-white font-bold p-3 bg-yellow-500 border-2 rounded-md border-white' onClick={handleRoomJoin}>Join Room</button>
      </div>
      {roomJoined && <span className='text-yellow-500 text-2xl'>You will see your files here: </span>}
      {
        metadata && <span>
          File Name: {metadata.name};
        </span> }
        {
          metadata && <span>
            File Size : {metadata.size}
          </span>
        }
      {roomJoined && receivedFile && (
        <div className='flex gap-4 items-center '>
          <h3>File Received</h3>
          <button className='p-3 bg-yellow-500 rounded-md border-2 border-white' onClick={downloadFile}>Download File</button>
        </div>
      )}
    </div>
    </>
  );
};

export default Receiver;
