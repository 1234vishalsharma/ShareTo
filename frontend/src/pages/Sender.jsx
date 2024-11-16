import React, { useState } from 'react';
import io from 'socket.io-client';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../components/Header';
// const socket = io('https://shareto.onrender.com'); // Replace with your server URL
const socket = io('http://localhost:5000'); // Replace with your server URL

const Sender = () => {
  const [roomID, setRoomID] = useState('');
  const [file, setFile] = useState(null);
  const [roomCreated, setRoomCreated] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleRoomJoin = () => {
    const room = roomID.trimStart();
    setRoomID(room);
    if (!roomCreated && room) {
      socket.emit('sender-join', room);
      setRoomCreated(true);
      toast.success('Room Created Successfully');
    } else {
      toast.error('Room Not created');
    }
  };

  const handleCopyRoomJoin = async () => {
    if (roomCreated) {
      try {
        await navigator.clipboard.writeText(roomID);
        toast.success('Room Copied');
      } catch (e) {
        toast.error('Failed to copy text');
      }
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      socket.emit('meta-data', { name: selectedFile.name, size: selectedFile.size, roomID });
    }
  };

  const sendFile = () => {
    if (file) {
      setIsSending(true);
      const reader = new FileReader();
      reader.onload = () => {
        const data = {
          roomID,
          file: reader.result,
        };
        socket.emit('data', data);
        setTimeout(() => {
          setIsSending(false);
          toast.success('File sent successfully!');
        }, 1000);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetRoom = () => {
    setRoomID('');
    setRoomCreated(false);
    setFile(null);
    toast('Room reset successfully!');
  };

  return (
    <>
      <Header />
      <div className='h-screen w-full bg-black flex flex-col items-center justify-between p-10 text-white'>
        {/* Top Section */}
        <div className='w-full max-w-4xl flex flex-col items-center gap-4'>
          <h1 className='text-4xl font-bold text-yellow-400 text-center '>
            Share Your Files Instantly
          </h1>
          <p className='text-gray-400 text-lg text-center'>
            Create a secure room, share files with ease, and enjoy seamless transfer.
          </p>
        </div>

        {/* Room Creation Section */}
        <div className='w-full max-w-lg bg-gray-800 rounded-lg p-6 shadow-lg'>
          <h2 className='text-2xl font-semibold text-center text-yellow-400 mb-4'>
            {roomCreated ? 'Room Details' : 'Create or Join a Room'}
          </h2>
          <div className='flex gap-3'>
            <input
              type='text'
              className={`flex-1 px-4 py-3 rounded-lg shadow ${roomCreated ? 'bg-gray-700 text-gray-300' : 'bg-white text-black'
                }`}
              placeholder='Enter Room ID'
              value={roomID}
              disabled={roomCreated}
              onChange={(e) => setRoomID(e.target.value)}
            />
            {!roomCreated ? (
              <button
                onClick={handleRoomJoin}
                className='px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-400'
              >
                Create Room
              </button>
            ) : (
              <button
                onClick={handleCopyRoomJoin}
                className='px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-400'
              >
                Copy Room ID
              </button>
            )}
          </div>
          {roomCreated && (
            <p className='text-sm text-gray-400 mt-2'>
              Room ID: <span className='text-yellow-300'>{roomID}</span>
            </p>
          )}
        </div>

        {/* File Upload Section */}
        {roomCreated && (
          <div className='w-full max-w-lg bg-gray-800 rounded-lg p-6 shadow-lg mt-6'>
            <h3 className='text-xl font-semibold text-center text-yellow-400 mb-4'>
              Upload and Send File
            </h3>
            <label className='cursor-pointer flex flex-col items-center'>
              <input
                type='file'
                className='hidden'
                onChange={handleFileChange}
              />
              <div className='w-full px-4 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-400'>
                Select File
              </div>
            </label>
            {file && (
              <p className='text-gray-400 text-sm mt-2'>
                Selected File: <span className='text-yellow-300'>{file.name}</span> ({(file.size / 1024).toFixed(2)} KB)
              </p>
            )}
            {file && (
              <button
                onClick={sendFile}
                className={`mt-4 w-full px-6 py-3 bg-yellow-500 rounded-lg font-semibold shadow ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-400'
                  }`}
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send File'}
              </button>
            )}
          </div>
        )}

        {/* Reset Button */}
        {roomCreated && (
          <button
            onClick={resetRoom}
            className='w-full max-w-lg px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-400'
          >
            Reset Room
          </button>
        )}

        <Toaster />
      </div>
    </>
  );
};

export default Sender;
