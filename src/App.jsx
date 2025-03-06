import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import { TodoWrapper } from './components/TodoWrapper';
import Profile from './components/Profile';

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600">
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/todo" element={<TodoWrapper />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
