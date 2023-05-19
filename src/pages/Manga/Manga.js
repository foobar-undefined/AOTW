import './Manga.css'
import { useLocation } from "react-router-dom";

export default function Manga(){
    const location = useLocation();
    const {manga} = location.state;

    if(!manga){
        return <div>Manga not found</div>
    }

    return(
        <div>

            {manga && (
                <div className="mangaPage">
                    <div className="manga-info">
                        <div className="img-container">
                            <img src = {manga.attributes.posterImage.medium} alt=""/>
                        </div>
                    </div>
                    <div className="manga-stats">
                        <h2>{manga.attributes.canonicalTitle}</h2>
                        <p><strong>Popularity rank: </strong>{manga.attributes.popularityRank}</p>
                        <p><strong>Average Rating: </strong>{manga.attributes.averageRating} </p>
                        <br/>
                        <div className="description">
                            <p><strong>Description: </strong> <br />{manga.attributes.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}