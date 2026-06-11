
import { Log } from '../utils/logger';

export async function fetchNotificationsFromServer() {
    try {
        const response = await fetch('http://localhost:5000/api/notifications');
        
        if (!response.ok) {
            
            Log("frontend", "error", "api", `Server returned failed response status code: ${response.status}`);
            return [];
        }
        
        return await response.json();
    } catch (err) {
        
        Log("frontend", "fatal", "api", `Network channel breakdown completely: ${err.message}`);
        return [];
    }
}