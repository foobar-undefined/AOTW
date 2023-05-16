import { Link } from "react-router-dom"

export default function AnimeCard(props){
    return(
        <>
        <Link to {`/anime/${props.anime.id}`}>
            <div>
                <h1>{props.anime.canonicalTitle}</h1>
                {/* <h2>{[props.anime.]}</h2> */}
            </div>
        </Link> 
        </>
    )
}