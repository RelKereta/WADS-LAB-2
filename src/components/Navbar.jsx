import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 shadow-md mb-4">
            <div className="flex justify-center space-x-4">
                <Link to="/" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md transition">
                    Home
                </Link>
                <Link to="/todo" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md transition">
                    To-Do List
                </Link>
                <Link to="/profile" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md transition">
                    Profile
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
