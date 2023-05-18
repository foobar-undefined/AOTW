import './AnimeList.css'
import { useEffect, useState } from "react"
import AnimeCard from "../../components/AnimeCard/AnimeCard";

export default function AnimeList(props){
    const [anime, setAnimeList] = useState([]);

    const fetchData = async () => {
        try{
            const response = await fetch("https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=6")
            const animeData = await response.json()
            setAnimeList(animeData.data);
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <main>
            <div className='content-wrap'>
                <div className='search-box-wrap'>
                    
                    <form className="search-box">
                        <input
                            type ="search"
                            placeholder="Search for an anime..."
                            required
                            />
                            <button type ="submit" class="searchButton">search</button>
                    </form>
                </div>
                
                <div className="animeList">
                    {anime && anime.map((animeItem) => (
                        <AnimeCard anime={animeItem} key={animeItem.id}/>
                        ))}
                </div>
            </div>
        </main>
    )
}