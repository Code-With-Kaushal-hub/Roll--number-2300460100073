
import React from 'react';
import { Log } from '../utils/logger'; 

export function NotificationList({ notifications }) {
    
    const handleViewItem = (id) => {
       
        Log("frontend", "info", "component", `User clicked to expand notification item ID: ${id}`);
    };

    return (
        <div className="notification-list">
            {notifications.map(item => (
                <div key={item.id} onClick={() => handleViewItem(item.id)}>
                    {item.title}
                </div>
            ))}
        </div>
    );
}