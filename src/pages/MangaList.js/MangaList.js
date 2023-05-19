import "./MangaList.css"
import { useEffect, useState } from "react";
import MangaCard from "../../components/MangaCard/MangaCard.js";

export default function MangaList(){
    const [mangaList, setMangaList] = useState([]);
    const [search, setSearch] = useState("");

    const fetchData = async () => {
        try{
            let url = "https://kitsu.io/api/edge/manga?";

            if(search){
                const encodedQuery = encodeURIComponent(search);
                url += `filter[text]=${encodedQuery}`;
                console.log(url);
            }
            const response = await fetch(url);
            const mangaData = await response.json()
            setMangaList(mangaData.data);

        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=> {
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
            <div className="manga-content-wrap">
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

                    <div className="mangaList">
                        {mangaList && mangaList.map((mangaItem) => (
                            <MangaCard mangaList={mangaItem} key={mangaItem.id}/>
                        ))}
                    </div>
            </div>
        </main>
    );

}
