import {Link} from "react-router-dom";

function Movie({id,title,genres,summary,rating,runtime,coverImg}){
    return (
        <div>
            <Link to={`/movie/${id}`}>
                <aside >
                    <header style={{padding:'0'}}>
                        <h2>{title}</h2>
                    </header>
                    <ul>
                        <li>
                            <small>Genre : </small>
                            {genres.map((genre,index)=>(
                                <small key={index}>{genre} </small>
                            ))}
                        </li>
                        <li><small>runtime : {runtime}</small></li>
                        <li><small>Rate : {rating}</small></li>
                    </ul>
                    <div>
                        <img src={coverImg} style={{width:'100%'}} alt=""/>
                    </div>
                </aside>
            </Link>
        </div>
    )
}

export default Movie;