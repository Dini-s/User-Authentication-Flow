import { useEffect, useState } from "react";

const useSetMode = () => {

    //use state for mode
    const [mode, setMode] = useState(() => localStorage.getItem('mode'));

    //function for set change mode
    const toggleMode = (changeMode) => {
        setMode(changeMode);
    }

    //add side effect fwhen the mode is change
    useEffect(() => {
        if (mode === 'dark') {
            document.body.classList.add('dark-mode');
            localStorage.setItem("mode", "dark");
        }
        else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem("mode", "light");
        }
    }, [mode]);

    return { mode, toggleMode };
}

export default useSetMode;