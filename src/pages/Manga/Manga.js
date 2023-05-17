
import { useLocation } from "react-router-dom";

export default function Manga(){
    const location = useLocation();
    const {manga} = location.state;

    if(!manga){
        return <div>Manga not found</div>
    }

    return(
        <div>
            <h1> Manga Detail Page</h1>
            {manga && (
                <div className="mangaPage">
                    <h2>{manga.attributes.canonicalTitle}</h2>
                    <img src = {manga.attributes.posterImage.medium} alt=""/>
                    <p>Popularity rank: {manga.attributes.popularityRank}</p>
                    <p>Description: {manga.attributes.description}</p>
                </div>
            )}
        </div>
    )
}