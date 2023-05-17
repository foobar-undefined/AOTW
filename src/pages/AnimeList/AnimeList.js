import { useEffect, useState } from "react"
import AnimeCard from "../../components/AnimeCard/AnimeCard";

export default function AnimeList(props){
    const [anime, setAnimeList] = useState([]);

    const fetchData = async () => {
        try{
            const response = await fetch("https://kitsu.io/api/edge/trending/anime/")
            const animeData = await response.json()
            setAnimeList(animeData.data);
            //console.log(anime);
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <main>
            {/* <div>
                <form className="search-box">
                    <input
                        type ="search"
                        placeholder="Search for an anime..."
                        required
                        />
                </form>
            </div> */}
           
            <div className="AnimeList">
                {anime && anime.map((animeItem) => (
                        <AnimeCard anime={animeItem} key={animeItem.id}/>
                ))}
            </div>
        </main>
    )
}