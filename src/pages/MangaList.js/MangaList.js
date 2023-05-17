import { useEffect, useState } from "react";

export default function MangaList(){
    const [mangaList, setMangaList] =useState([]);

    const fetchData = async () => {
        try{
            const response = await fetch("https://kitsu.io/api/edge/trending/manga");
            const mangaData = await response.json()
            setMangaList(mangaData.data);
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
