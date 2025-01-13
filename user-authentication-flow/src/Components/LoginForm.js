import { useContext, useState } from "react";
import { UserData } from "../Context/UserAuth";

const LoginForm = () => {

    const { login } = useContext(UserData);
    const [userCredentials, setuserCredentials] = useState({
        username: "",
        password: "",
    })

    const handleInput = (event) => {
        const { name, value } = event.target;
        setuserCredentials((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const { username, password } = userCredentials;
        login(username, password);
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h1>Welcome To User Anthentication Flow</h1>
                <p>
                    <label>User Name : </label>
                    <input type="text" name="username" value={userCredentials.username} onChange={handleInput} />
                </p>
                <p>
                    <label>Password : </label>
                    <input type="password" name="password" value={userCredentials.password} onChange={handleInput} />
                </p>
                <p>
                    <button type="submit">Log In</button>
                </p>
            </form>
        </div>
    )

}

export default LoginForm;