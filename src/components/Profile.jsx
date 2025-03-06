import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="/src/assets/profil.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Farrell Sevillen Arya</h2>
            <p className="text-gray-600 mb-4">
                Computer Science student at Binus International, football, and exploring tech innovations.
            </p>
            <Link to="/">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mb-4">
                    Go to To-Do List
                </button>
            </Link>
        </div>
    );
};

export default Profile;
