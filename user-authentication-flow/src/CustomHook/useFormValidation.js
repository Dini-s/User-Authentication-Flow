import { useState } from "react";

const useFormValidation = () => {

    //create use state to pass one or more errors
    const [errors, setErrors] = useState({});

    const validation = ({ name, password, email }) => {

        //create object to temporary store errors
        const tempError = {};

        if (!name || name.trim() === "") {
            tempError.name = "User Name required";
        }

        if (!password || password.length < 6) {
            tempError.password = "Your password should be at least 6 characters";
        } else {
            if (!/\d/.test(password)) {
                tempError.password = "password should be at least one number";
            }
            else if (!/[A-Z]/.test(password)) {
                tempError.password = "password Should include both a upper and lower case letters";
            }
            else if (!/[^A-Za-z0-9]/.test(password)) {
                tempError.password = "password should include at least one special characters.";
            }
            else {
                tempError.password = "Re-Check Your Password";
            }

        }

        const mailregex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email || !mailregex.test(email)) {
            tempError.email = "Email pattern is not correct.try Again..";
        }

        setErrors(tempError);
        return (tempError);
    }

    const clearFiels = (field) => {
        setErrors((prevErrors) => {
            const { [field]: _, ...rest } = prevErrors;
            return rest;
        })

    }
    return { errors, validation, clearFiels };
}

export default useFormValidation;