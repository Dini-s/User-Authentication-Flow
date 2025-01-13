import { createContext, useCallback } from "react";
import { useReducer } from "react";
import { userReducer } from "../Reducer/userReducer";


const initialState = {
    users: [],
    currentUser: null,
}
export const UserData = createContext({});

const UserAuth = ({ children }) => {

    const [state, dispatch] = useReducer(userReducer, initialState);

    const signUp = useCallback((newUser) => {
        dispatch({
            type: 'Sign_Up',
            payload: newUser
        });
    }, []);

    const login = useCallback((username, password) => {
        dispatch({
            type: "Log_In",
            payload: { username, password }
        });
    }, []);

    return (
        <UserData.Provider value={{
            users: state.users,
            currentUser: state.currentUser,
            signUp,
            login
        }}>

            {children}
        </UserData.Provider>
    );
}
export default UserAuth;