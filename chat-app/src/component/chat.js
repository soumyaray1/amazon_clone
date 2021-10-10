import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngin } from 'react-chat-engine';
import { auth } from '../component/firebase';

const Chats = () => {
    const history = useHistory();
    const handleLogout = async () => {
        await auth.signOut();
        history.push('/');
    }
    return (
        <div className ="chats-page">
            <div className= "nav-bar">
            <div className="logo-tab">
                Chat-app
            </div>
            <div onClick={handleLogout} className="logout-tab">
                Logout
            </div>
        </div>
        <ChatEngin 
            height="calc(100vh -66px)"
            projectId="cbeee394-7fef-4325-b10f-133e2274144a"
            userName="."
            usersSecret="."
        />
        </div>
    );
}

export default Chats;