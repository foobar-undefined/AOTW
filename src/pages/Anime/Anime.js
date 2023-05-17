
import { useParams, useLocation} from "react-router-dom";

export default function Anime(){
    const location = useLocation();
    const {anime} = location.state; 
    console.log(anime);
    
    if (!anime) {
        return <div>Anime not found.</div>;
      }

    return(
        <div>
            <h1>Anime Detail Page</h1>
            {anime && (
                <div>
                    <h2>{anime.attributes.canonicalTitle}</h2> 
                    <img src = {anime.attributes.posterImage.medium} alt=""/>
                    <p>Title: {anime.attributes.canonicalTitle}</p>
                    <p>Start Date: {anime.attributes.startDate}</p>
                    <p>End Date: {anime.attributes.endDate}</p>
                    <p>Episode Count: {anime.attributes.episodeCount}</p>
                    <p>Description: {anime.attributes.description}</p>
                </div>
            )}
        </div>
    )
}