import './AnimeList.css'
import { useEffect, useState } from "react"
import AnimeCard from "../../components/AnimeCard/AnimeCard";

export default function AnimeList(props){
    const [anime, setAnimeList] = useState([]);
    const [search, setSearch] = useState("");

    const fetchData = async () => {
        try{
            let url = "https://kitsu.io/api/edge/anime?"
            
            if(search){
                const encodedQuery = encodeURIComponent(search);
                url += `filter[text]=${encodedQuery}`;
            }
            const response = await fetch(url)
            const animeData = await response.json()
            setAnimeList(animeData.data);
        }catch(error){
            console.log(error)
        }
    };

    useEffect(()=>{
        fetchData();
    },[]);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchData();
    };

    const handleSearchInput = (e) => {
        setSearch(e.target.value);
    }

    return(
        <main>
            <div className='content-wrap'>
                <div className='search-box-wrap'>
                    
                    <form className="search-box" onSubmit={handleSearch}>
                        <input
                            type ="search"
                            placeholder="Search for an anime..."
                            value={search}
                            onChange={handleSearchInput}
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
    );
}
