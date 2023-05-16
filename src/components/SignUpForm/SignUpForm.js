import { useState } from "react";
export default function SignUpForm({setUser}){
    
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    });

    const handleChange = (evt) => {
        setNewUser({
            ...newUser,
            [evt.target.name]: evt.target.value,
            error: ''
        });
    }
    
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try{
            setUser(newUser)

        }catch(error){
            
        }
    }

    return (
        <div>
            <div className="form-container">
            <h1> Sign Up Page</h1>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Enter your name..." 
                        value={newUser.name} 
                        onChange={handleChange} 
                        required 
                    />
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your Email..."
                        value={newUser.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter your password..."
                        value={newUser.password} 
                        onChange={handleChange} 
                        required 
                    />
                    <label>Confirm</label>
                    <input 
                        type="password" 
                        name="confirm"
                        placeholder="Confirm your password..."
                        value={newUser.confirm} 
                        onChange={handleChange} 
                        required 
                    />
                    <button type="submit">SIGN UP</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{newUser.error}</p>
        
        </div>

    );
}