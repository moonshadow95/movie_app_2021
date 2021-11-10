import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/movie/:id">
                    <Detail/>
                </Route>
            </Switch>
        </Router>
    )
}
export default App;
