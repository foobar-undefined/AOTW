
import {  useLocation} from "react-router-dom";
import "./Anime.css"
export default function Anime(){
    const location = useLocation();
    const {anime} = location.state; 
    console.log(anime);

    if (!anime) {
        return <div>Anime not found.</div>;
      }

    return(
        <div>
            {anime && (
                <div className="animePage">
                    <div className="anime-info">
                        <div className="img-container">
                            <img src = {anime.attributes.posterImage.medium} alt=""/>
                        </div>
                    </div>
                    <div className="anime-stats">
                        <h2>{anime.attributes.canonicalTitle}</h2> 
                        <p><strong>Start Date:</strong>  {anime.attributes.startDate}</p>
                        <p><strong>End Date:</strong>  {anime.attributes.endDate}</p>
                        <p><strong>Episode Count:</strong> {anime.attributes.episodeCount}</p>
                        <p><strong>Average rating:</strong>  {anime.attributes.averageRating}</p>
                        <br />
                        <div className="description">
                            <p><strong> Description: </strong> <br />{anime.attributes.synopsis}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}