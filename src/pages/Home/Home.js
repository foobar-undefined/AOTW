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
                }}> <h1> Welcome,  Please stay a while</h1>
        </div>
    </div>

    )
}
