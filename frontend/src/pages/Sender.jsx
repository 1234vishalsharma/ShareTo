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
      console.log('Sender joined room: ', room);
      setRoomCreated(true);
      toast.success("Room Created Successfully");
    } else {
      toast.error("Room Not created");
    }
  };

  const handleCopyRoomJoin = async () => {
    if (roomCreated) {
      try {
        await navigator.clipboard.writeText(roomID);
        toast.success("Room Copied");
      } catch (e) {
        console.log("Error in copy text: ", e);
        toast.error("Failed to copy text");
      }
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    console.log("Before emitting: ", selectedFile);
    if (selectedFile) {
      console.log(selectedFile);
      socket.emit("meta-data", { name: selectedFile.name, size: selectedFile.size, roomID });
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
        console.log('File sent to room: ', roomID);
        setTimeout(() => {
          setIsSending(false);
          toast.success("File sent successfully!");
        }, 1000);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetRoom = () => {
    setRoomID('');
    setRoomCreated(false);
    setFile(null);
    toast("Room reset successfully!");
  };

  return (
    <>
      <Header />
      <div className='text-white flex flex-col justify-center items-center gap-5 h-screen bg-black-900'>
        <h2 className='text-2xl text-yellow-500 font-semibold'>You are a Sender:</h2>

        {/* Room ID Input */}
        <div className='flex gap-4'>
          <input
            type="text"
            className={`p-2 outline-none rounded-md ${roomCreated ? "text-white bg-gray-700" : "text-black"
              }`}
            value={roomID}
            disabled={roomCreated}
            placeholder="Enter Room ID"
            onChange={(e) => setRoomID(e.target.value)}
          />
          {!roomCreated && (
            <button
              className='text-white font-bold p-3 bg-yellow-500 border-2 rounded-md border-white'
              onClick={handleRoomJoin}
            >
              Create Room
            </button>
          )}
          {roomCreated && (
            <button
              className='text-white font-bold p-3 bg-yellow-500 border-2 rounded-md border-white'
              onClick={handleCopyRoomJoin}
            >
              Copy Room ID
            </button>
          )}
        </div>

        {/* Room Status */}
        <p className='text-sm text-gray-400'>
          {roomCreated ? `Room Created: ${roomID}` : "No Room Created Yet"}
        </p>

        {/* File Upload Section */}
        {roomCreated && (
          <>
            <input
              className='text-white font-bold p-3 bg-yellow-500 border-2 rounded-md border-white'
              type="file"
              onChange={handleFileChange}
            />
            {file && (
              <div className='text-sm text-gray-400 mt-2'>
                Selected File: <span className='text-yellow-500'>{file.name}</span> ({(file.size / 1024).toFixed(2)} KB)
              </div>
            )}
            <button
              className={`text-white font-bold p-3 bg-yellow-500 border-2 rounded-md border-white ${isSending ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={sendFile}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send File"}
            </button>
            {isSending && <div className="spinner mt-2"></div>}
          </>
        )}

        {/* Reset Room */}
        {roomCreated && (
          <button
            className='text-white font-bold p-2 bg-red-500 border-2 rounded-md border-white mt-4'
            onClick={resetRoom}
          >
            Reset Room
          </button>
        )}

        <Toaster />
      </div>

      {/* Spinner Styling */}
      <style jsx>{`
        .spinner {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid yellow;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Sender;
