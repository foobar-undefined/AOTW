import { useState } from "react";

export default function LoginPage({setUser}){
    const [username, setUsername] = useState('');
    
    const handleChange=(event) => {
        setUsername(event.target.value);
        console.log(username);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setUser(username);
    };
    return(
        <div>
            <h1> Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    value={username} 
                    onChange={handleChange} 
                    placeholder="Enter username"
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    );  
}