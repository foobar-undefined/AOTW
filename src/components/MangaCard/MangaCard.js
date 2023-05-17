import { Link } from "react-router-dom";

export default function MangaCard({manga}){
    return(
        <>
            <Link to={`/manga/${manga.id}`} state={{manga:manga}} className="manga-card-link"> 
                <div className="manga-card">
                    <h2>{manga.attributes.canonitcalTitle}</h2>
                    <img src = {manga.attributes.psoterImage.medium} />
                </div>
            </Link>
        </>
    )
}