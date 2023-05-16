import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function AnimeList(props){
    const [anime, setAnimeList] = useState([]);

    const fetchData = async () => {
        try{
            const response = await fetch("https://kitsu.io/api/edge/trending/anime/")
            const animeData = await response.json()
            setAnimeList(animeData.data);
            console.log(anime);
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <main>
            <div>
                <form className="search-box">
                    <input
                        type ="search"
                        placeholder="Search for an anime..."
                        required
                        />
                </form>
            </div>
           
            <div className="AnimeList">
                {anime && anime.map((animeItem) => (
                    <div key={animeItem.id}>
                        <p>Title: {animeItem.attributes.canonicalTitle}</p>
                        <p>Start Date: {animeItem.attributes.startDate}</p>
                        <p>End Date: {animeItem.attributes.endDate}</p>
                        <p>Episode Count: {animeItem.attributes.episodeCount}</p>
                        <img src = {animeItem.attributes.posterImage.tiny}/>
                    </div>
                ))}
            </div>
        </main>
    )
}