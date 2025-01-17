import useNetworkConnection from "../CustomHook/useNetworkConnection";
import "./../Styles/HomePage.css"
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const HomePage = () => {

    const isOnline = useNetworkConnection();

    const ConnectionHandle = () => {
        window.location.reload();
    }
    if (!isOnline) {
        return (
            <div className="con-less">
                <h4>"Your Offline.Please Check Your Network Connection"</h4>
                <button onClick={ConnectionHandle}>Retry</button>

            </div>
        );
    }
    return (
        <div>

            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="signUp"><SignUpForm /></div>
                <div className="LogIn"><LoginForm /></div>


            </div>
        </div>
    );
}

export default HomePage;