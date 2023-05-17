import "./MangaList.css"
import { useEffect, useState } from "react";
import MangaCard from "../../components/MangaCard/MangaCard.js";

export default function MangaList(props){
    const [mangaList, setMangaList] = useState([]);

    const fetchData = async () => {
        try{
            const response = await fetch("https://kitsu.io/api/edge/trending/manga");
            const mangaData = await response.json()
            setMangaList(mangaData.data);
            console.log(mangaList)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=> {
        fetchData();
    },[]);

    return(
        <main>
            <div className="manga-content-wrap">
                <div className="mangaList">
                    {mangaList && mangaList.map((mangaItem) => (
                        <MangaCard mangaList={mangaItem} key={mangaItem.id}/>
                    ))}
                </div>
            </div>
        </main>
    );

}
