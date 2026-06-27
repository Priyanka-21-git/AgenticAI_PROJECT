import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import LogoutScreen from './components/LogoutScreen';
import './styles/index.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <div className="app">
            {isAuthenticated ? (
                <LogoutScreen onLogout={handleLogout} />
            ) : (
                <LoginScreen onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;