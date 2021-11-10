import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Navigator from "../components/Navigator";

function Detail(){
    const {id} = useParams()
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState();
    const getMovieDetails = async () => {
        const json = await (
            await fetch (
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetails(json.data.movie)
        setLoading(false);
    }
    useEffect( () => {
        getMovieDetails()
    },[]);

    return (
        <main>
            <Navigator/>
            {loading ? (
                <strong>Loading...</strong>
            ):(
                <section style={{display:'flex', gap:'20px'}}>
                    <img src={details.large_cover_image} alt=""/>
                    <div>
                        <header style={{padding:'0'}}>
                            <h2>{details.title}</h2>
                        </header>
                        <div>
                            <div>
                                <ul>
                                    <li>
                                        <span>Genre : </span>
                                        {details.genres.map((genre,index)=>(
                                            <span key={index}>{genre} </span>
                                        ))}
                                    </li>
                                    <li><span>runtime : {details.runtime}</span></li>
                                    <li><span>Rate : {details.rating}</span></li>
                                </ul>
                            </div>
                            <p>{details.description_full}</p>
                        </div>
                    </div>
                </section>
            )}
        </main>
    )
}

export default Detail;