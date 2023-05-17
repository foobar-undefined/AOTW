import { Link } from "react-router-dom"

export default function AnimeCard({anime}){

    return(
        <>
        <Link to = {`/anime/${anime.id}`} state={{anime: anime }} >
            <div className ="anime-card">
                <h2>{anime.attributes.canonicalTitle}</h2>
                <p>Episode Count: {anime.attributes.episodeCount}</p>
                <img src = {anime.attributes.posterImage.tiny} alt=""/>
            </div>
        </Link>
        </>
    )
}