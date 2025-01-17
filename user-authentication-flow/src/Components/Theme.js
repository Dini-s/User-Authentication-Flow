import useSetMode from "../CustomHook/useSetMode";
import "./../Styles/Theme.css";

const Theme = () => {

    //call mode custome hook
    const { mode, toggleMode } = useSetMode();

    //mode handling function
    const modeHandle = () => {
        toggleMode(mode === 'dark' ? 'light' : 'dark');
    }
    return (
        <div className="modeChnage">
            <button onClick={modeHandle}>{mode === 'dark' ? '🌞' : '🌙'}</button>
        </div>
    )

}
export default Theme;