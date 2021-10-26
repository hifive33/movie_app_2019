import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import UseState from "./routes/Hooks/UseState";
import UseEffect from "./routes/Hooks/UseEffect";
import UseTitle from "./routes/Hooks/UseTitle";

function App() {
    return(
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <section className="container">
                <Route path="/hooks/useState" component={UseState} />
                <Route path="/hooks/useEffect" component={UseEffect} />
                <Route path="/hooks/useTitle" component={UseTitle} />
            </section>
            <Route path="/movie/:id" component={Detail} />
        </HashRouter>
    )
}

export default App;