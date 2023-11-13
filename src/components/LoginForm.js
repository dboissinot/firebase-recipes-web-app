import { useState } from "react";
import FirebaseAuthService from "../FirebaseAuthService";

function LoginForm({ existingUSer}){
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    async function handleSubmit(event){
        event.preventDefault();

        try {
            await FirebaseAuthService.registerUser(username, password);
            setUsername("");
            setPassword("");
        } catch (error) {
            alert(error.message);
        }
    }

    return (<h1>Login Form</h1>);
}

export default LoginForm;