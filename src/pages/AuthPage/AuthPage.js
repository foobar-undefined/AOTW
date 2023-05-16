import { useState } from "react";
import LoginPage from "../../components/LoginPage/LoginPage";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage({setUser}){
    const [isNewUser, setIsNewUser] = useState(true);
    
    const toggleAuthMode = () => {
        setIsNewUser((prevIsNewUser) => !prevIsNewUser);
      };

    return(
        <main>
            {isNewUser ? (
                <div>
                    <LoginPage setUser={setUser} />
                    { <button className="signUp" onClick={toggleAuthMode}>Sign up</button> }
                </div>
            ):(
                <div>
                    <SignUpForm setUser = {setUser} />
                    { <button className="login" onClick={toggleAuthMode}>Log In</button> }
                </div>
            )}
        </main>
    );
}