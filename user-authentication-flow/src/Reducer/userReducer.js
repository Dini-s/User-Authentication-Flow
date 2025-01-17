
export const userReducer = (state, action) => {
    switch (action.type) {
        case 'Sign_Up':


            const updatedStateAfterSignUp = {
                ...state,
                users: [...state.users, action.payload],
            };

            return updatedStateAfterSignUp;

        case 'Log_In':
            const foundUser = state.users.find(
                (user) =>
                    user.username === action.payload.username &&
                    user.password === action.payload.password
            );
            if (foundUser) {
                alert("Login Success");
                return {
                    ...state,
                    currentUser: foundUser,

                };

            }
            else {
                alert("Invalid.Try again...");
                return state;
            }
        default:
            return state;
    }

}