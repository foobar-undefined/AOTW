import { Link } from "react-router-dom"

export default function AnimeCard({anime}){
    //const anime = props.anime;
    return(
        <div className ="anime-card">
            <h2>{anime.attributes.canonicalTitle}</h2>
            <p>Start Date: {anime.attributes.startDate}</p>
            <p>End Date: {anime.attributes.endDate}</p>
            <p>Episode Count: {anime.attributes.episodeCount}</p>
            <img src = {anime.attributes.posterImage.tiny} alt="Anime image"/>
        </div>
    
    )
}