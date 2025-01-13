import "./../Styles/HomePage.css"
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const HomePage = () => {
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