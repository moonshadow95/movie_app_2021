import {Link} from "react-router-dom";

function Navigator(){
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Back
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navigator;