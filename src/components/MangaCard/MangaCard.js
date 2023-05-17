import { Link } from "react-router-dom";

export default function MangaCard({mangaList}){
    return(
        <>
            <Link to={`/manga/${mangaList.id}`} state={{manga: mangaList}} className="manga-card-link"> 
                <div className="manga-card">
                    <h2>{mangaList.attributes.canonicalTitle}</h2>
                    <img src = {mangaList.attributes.posterImage.medium} alt =""/>
                </div>
            </Link>
        </>
    )
}