import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
const Profile = () => {
    const [user, setUser] = useState({
        photo: '', 
        name: 'Shivam',
        email: 'shivam@gmail.com',
        phone: '+9104498',
    });
    const navigate = useNavigate();

    const [sharedFiles, setSharedFiles] = useState([
        { id: 1, name: 'file1.pdf', size: '2 MB' },
        { id: 2, name: 'file2.jpg', size: '1 MB' },
        { id: 3, name: 'file3.mp4', size: '5 GB' },
    ]);

    const [loading, setLoading] = useState(true);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editedUser, setEditedUser] = useState(user);

    useEffect(() => {
        
        setTimeout(() => setLoading(false), 2000); 
    }, []);

    const handleEdit = () => {
        setEditedUser(user); // Initialize with current user data
        setIsEditModalOpen(true);
    };

    const handleSave = () => {
        setUser(editedUser);
        setIsEditModalOpen(false);
    };

    const handleDelete = () => {
        alert('Delete account functionality to be implemented');
    };

    return (
        <div className='w-full h-screen bg-black text-yellow-500'>
            {loading ? (
                <div className='flex justify-center items-center h-full'>
                    <div className='loader ease-linear rounded-full border-4 border-t-4 border-yellow-500 h-12 w-12'></div>
                </div>
            ) : (
                <>
                    <nav className='flex justify-between items-center p-6 bg-[#1a1a1a]'>
                        <span onClick={() => navigate("/")} className='text-2xl font-bold cursor-pointer'>ShareTo</span>
                        <div className='flex gap-6'>
                            <a href="/" className='hover:underline'>Home</a>
                        </div>
                    </nav>

                    <div className='flex flex-col items-center p-8 animate__animated animate__fadeIn'>
                        {/* User Profile Section */}
                        <div className='w-4/5 bg-[#222222] rounded-xl p-6 flex gap-8 justify-between items-center shadow-lg'>
                            <img
                                src={user.photo || 'https://via.placeholder.com/150'}
                                alt="Profile"
                                className='rounded-full w-32 h-32 border-4 border-yellow-500 object-cover'
                            />
                            <div className='flex-1 text-yellow-500'>
                                <h2 className='text-3xl font-bold mb-4'>{user.name}</h2>
                                <p className='mb-2'>Email: {user.email}</p>
                                <p>Phone: {user.phone}</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <button
                                    onClick={handleEdit}
                                    className='p-2 bg-yellow-500 text-black rounded-md w-32 hover:bg-yellow-600'
                                >
                                    Edit Profile
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className='p-2 bg-yellow-700 text-black rounded-md w-32 hover:bg-yellow-700'
                                >
                                    Delete Account
                                </button>
                            </div>
                        </div>

                        {/* Shared Data History Section */}
                        <div className='w-4/5 bg-[#222222] rounded-xl p-6 mt-8 shadow-lg'>
                            <h3 className='text-2xl font-semibold mb-4'>Shared Data History</h3>
                            <div className='max-h-60 overflow-y-auto'>
                                {sharedFiles.length > 0 ? (
                                    sharedFiles.map(file => (
                                        <div
                                            key={file.id}
                                            className='flex justify-between p-3 bg-[#333333] mb-2 rounded-md'
                                        >
                                            <span>{file.name}</span>
                                            <span>{file.size}</span>
                                        </div>
                                    ))
                                ) : (
                                    <p>No shared data yet</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Edit Profile Modal */}
                    {isEditModalOpen && (
                        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                            <div className='bg-[#222222] p-6 rounded-lg shadow-lg w-4/5 max-w-md'>
                                <h2 className='text-2xl font-semibold mb-4'>Edit Profile</h2>
                                <form>
                                    <label className='block mb-2'>Name</label>
                                    <input
                                        type='text'
                                        value={editedUser.name}
                                        onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                                        className='w-full p-2 mb-4 rounded-md bg-[#333333] text-yellow-500'
                                    />
                                    <label className='block mb-2'>Email</label>
                                    <input
                                        type='email'
                                        value={editedUser.email}
                                        onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                                        className='w-full p-2 mb-4 rounded-md bg-[#333333] text-yellow-500'
                                    />
                                    <label className='block mb-2'>Phone</label>
                                    <input
                                        type='text'
                                        value={editedUser.phone}
                                        onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
                                        className='w-full p-2 mb-4 rounded-md bg-[#333333] text-yellow-500'
                                    />
                                </form>
                                <div className='flex gap-4 justify-end'>
                                    <button
                                        onClick={() => setIsEditModalOpen(false)}
                                        className='p-2 bg-red-500 text-black rounded-md w-24 hover:bg-red-600'
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        className='p-2 bg-green-500 text-black rounded-md w-24 hover:bg-green-600'
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Profile;