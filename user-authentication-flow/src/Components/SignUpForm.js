import { useContext, useState } from "react";
import { UserData } from "../Context/UserAuth";
import User from "../Utils/User";

const SignUpForm = () => {

    const { signUp } = useContext(UserData);
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
    });
    const [confirmedPw, setConfiredPw] = useState("");

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        const { username, password } = userInfo;

        if (password === confirmedPw && username) {
            const newUser = new User(userInfo.username, userInfo.password);
            //console.log("new user created", newUser);
            signUp(newUser);
            alert("SuccessFully Sign up");
            setUserInfo({ username: "", password: "" });
            setConfiredPw("");
        }
        else {
            alert("confirmed Password mismatch");
        }
    }



    return (
        <div>
            <form onSubmit={handleSignIn}>

                <label htmlFor="chk" aria-hidden="true">Sign Up </label>
                <input type="text" name="username" value={userInfo.username} onChange={handleInput} placeholder="UserName" />

                <input type="password" name="password" value={userInfo.password} onChange={handleInput} placeholder="Password" />

                <input type="password" name="confirmedPw" value={confirmedPw} onChange={(e) => setConfiredPw(e.target.value)} placeholder="Confirm Password" />



                <button type="submit">Sign In</button>

            </form>
        </div>
    )
}
export default SignUpForm;