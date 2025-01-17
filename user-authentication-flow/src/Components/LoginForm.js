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


                <label htmlFor="chk" aria-hidden="true">Log In</label>
                <input type="text" name="username" value={userCredentials.username} onChange={handleInput} placeholder="User Name" />

                <input type="password" name="password" value={userCredentials.password} onChange={handleInput} placeholder="Password" />

                <button type="submit">Log In</button>

            </form>
        </div>
    )

}

export default LoginForm;