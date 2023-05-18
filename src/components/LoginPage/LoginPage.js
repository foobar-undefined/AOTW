import './LoginPage.css'
import { useState } from "react";

export default function LoginPage({setUser}){
    const [loginUser, setLoginUser] = useState('');
    
    const handleChange=(event) => {
        setLoginUser(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setUser(loginUser);
    };
    return(
        <div class= "login-box">
            <form className="auth-form" onSubmit={handleSubmit}>
                <br/>
                <label>Name</label>
                <input type="text" 
                    value={loginUser} 
                    required
                    onChange={handleChange} 
                    placeholder="Enter username"
                />
                <button class="loginBtn" type="submit">Log in</button>
            </form>
        </div>
    );  
}