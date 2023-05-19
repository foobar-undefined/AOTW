import './Home.css'
import imgs from "../../imgs/welcome-goku.jpg"

export default function Home(){
    return(
    <div className="wrapper">
        <div className='welcome-container'
            style = {{backgroundImage: `url(${imgs})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            height: "100vh"
                        }}> 
        </div>
        <div className='welcome-message'>
            <h1> Have you ever worked with anything... high-tech?</h1>
            <h1> - TOM from toonami</h1>
        </div>
    </div>

    )
}
