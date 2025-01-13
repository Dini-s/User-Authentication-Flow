
export const userReducer = (state, action) => {
    switch (action.type) {
        case 'Sign_Up':

            console.log("Before Sign_Up:", state); // Log state before update
            const updatedStateAfterSignUp = {
                ...state,
                users: [...state.users, action.payload],
            };
            console.log("After Sign_Up:", updatedStateAfterSignUp); // Log state after update
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