import { useContext, useState } from "react";
import { UserData } from "../Context/UserAuth";
import User from "../Utils/User";
import useFormValidation from "../CustomHook/useFormValidation";
import './../Styles/HomePage.css';

const SignUpForm = () => {

    //use sign up context
    const { signUp } = useContext(UserData);

    //user creadentials
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        email: "",
    });

    //confirmed password usestate
    const [confirmedPw, setConfiredPw] = useState("");

    //call validaion custom hook
    const { errors, validation, clearFiels } = useFormValidation();

    //function for handle input when it is change
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        //clear errors
        clearFiels(name);
    }

    //handling function for when clicking submitting button
    const handleSignIn = (e) => {
        e.preventDefault();

        //validation check
        const checkValidation = validation({
            name: userInfo.username,
            password: userInfo.password,
            email: userInfo.email,
        });
        //if the error found return error
        if (Object.keys(checkValidation).length > 0) {
            return;

        }
        const { username, password, email } = userInfo;

        if (password === confirmedPw && username && email) {
            const newUser = new User(userInfo.username, userInfo.password, userInfo.email);
            //console.log("new user created", newUser);
            signUp(newUser);
            alert("SuccessFully Sign up");
            setUserInfo({ username: "", password: "", email: "" });
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
                {errors.name && <p>{errors.name}</p>}

                <input type="email" name="email" value={userInfo.email} onChange={handleInput} placeholder="Email" />
                {errors.email && <p>{errors.email}</p>}

                <input type="password" name="password" value={userInfo.password} onChange={handleInput} placeholder="Password" />
                {errors.password && <p>{errors.password}</p>}

                <input type="password" name="confirmedPw" value={confirmedPw} onChange={(e) => setConfiredPw(e.target.value)} placeholder="Confirm Password" />



                <button type="submit">Sign In</button>
                `            </form>
        </div>
    )
}
export default SignUpForm;