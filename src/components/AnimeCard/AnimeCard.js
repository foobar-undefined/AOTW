export default function AnimeCard(props){
    return(
        <>
        <Link to {`/anime/${props.anime.attributes}`}>
           <h1>{props.anime}</h1> 
        </Link>
        </>
    )
}