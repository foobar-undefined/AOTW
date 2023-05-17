import { useState } from "react";
import LoginPage from "../../components/LoginPage/LoginPage";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import imgs from "../../imgs/aniFlx.jpeg"

export default function AuthPage({setUser}){
    const [isNewUser, setIsNewUser] = useState(true);
    
    const toggleAuthMode = () => {
        setIsNewUser((prevIsNewUser) => !prevIsNewUser);
      };

    return(
        <main>
            <div style = {{backgroundImage: `url(${imgs})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
            }}>
            {isNewUser ? (
                <div>
                    <LoginPage setUser={setUser} />
                    { <button className="signUp" onClick={toggleAuthMode}>Sign up</button> }
                </div>
            ):(
                <div>
                    <SignUpForm setUser = {setUser} toggleAuthMode={toggleAuthMode} />
                    { <button className="login" onClick={toggleAuthMode}>Log In</button> }
                </div>
            )}
            </div>
        </main>
    );
}