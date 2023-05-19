import './LoginPage.css'
import { useState } from "react";

export default function LoginPage({setUser}){
    const [loginUser, setLoginUser] = useState({
        name: '',
        password: '',
    });
    
    const handleChange =(event) => {
        setLoginUser({            
            ...loginUser,
            [event.target.name]: event.target.value,
            error: ''});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setUser(loginUser.name);
    };
    return(
        <div class= "login-box">
            <form className="auth-form" onSubmit={handleSubmit}>
                <br/>
                <label>Name</label>
                <input 
                    type="text"
                    name='name'
                    value={loginUser.name} 
                    required
                    onChange={handleChange} 
                    placeholder="Enter name"
                />
                <label>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter your password..."
                        value={loginUser.password} 
                        onChange={handleChange} 
                        required 
                    />
                <button class="loginBtn" type="submit">Log in</button>
            </form>
        </div>
    );  
}