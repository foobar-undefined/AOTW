import { Link } from "react-router-dom"

export default function AnimeCard({anime}){

    return(
        <>
        <Link to = {`/anime/${anime.id}`} state={{anime: anime }} className="anime-card-link">
            <div className ="anime-card">
                <h2>{anime.attributes.canonicalTitle}</h2>
                <img src = {anime.attributes.posterImage.medium} alt=""/>
            </div>
        </Link>
        </>
    )
}