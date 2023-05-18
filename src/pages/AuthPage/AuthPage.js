import { useState } from "react";
import LoginPage from "../../components/LoginPage/LoginPage";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import imgs from "../../imgs/aniFlx.jpeg"
import "./AuthPage.css"

export default function AuthPage({setUser}){
    const [isNewUser, setIsNewUser] = useState(true);
    
    const toggleAuthMode = () => {
        setIsNewUser((prevIsNewUser) => !prevIsNewUser);
      };

    return(
        <main>
            <div 
            className="signUp-container"
            style = {{backgroundImage: `url(${imgs})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "100vh"
            }}>
            {isNewUser ? (
                <div >
                    <LoginPage setUser={setUser} />
                    { <button className="signUpBtn" onClick={toggleAuthMode}>Sign up</button> }
                </div>
            ):(
                <div>
                    <SignUpForm setUser = {setUser} toggleAuthMode={toggleAuthMode} />
                    <p> Not a user? { <button className="login" onClick={toggleAuthMode}>Log In</button> }
                    </p>
                </div>
            )}
            </div>
        </main>
    );
}