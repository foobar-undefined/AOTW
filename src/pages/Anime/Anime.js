import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Anime(props){
    const {id} = useParams();
    const url = "https://kitsu.io/api/edge/anime/";
    const [anime, setAnime] = useState(null);

    const fetchData = async() => {
        try{
            const response = await fetch(url);
            const animeData = await response.json()
            setAnime(animeData.data);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <div>
            <h2>Anime</h2>
                {anime && anime.map((animeItem) => (
                    <div key={animeItem.id}>
                        <p>Title: {animeItem.attributes.canonicalTitle}</p>
                        <p>Start Date: {animeItem.attributes.startDate}</p>
                        <p>End Date: {animeItem.attributes.endDate}</p>
                        <p>Episode Count: {animeItem.attributes.episodeCount}</p>
                    </div>
                ))}
        </div>
    )
}