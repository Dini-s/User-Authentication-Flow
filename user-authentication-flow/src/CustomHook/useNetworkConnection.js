import { useEffect, useState } from "react";

const useNetworkConnection = () => {

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {

        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        //clear window listner
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    }, []);

    return isOnline;

}

export default useNetworkConnection;