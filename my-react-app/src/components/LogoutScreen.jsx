import React from 'react';

const LogoutScreen = ({ onLogout }) => {
    return (
        <div className="logout-screen">
            <h2>You have successfully logged out ✅.</h2>
            <button onClick={onLogout}>Log In Again</button>
        </div>
    );
};

export default LogoutScreen;