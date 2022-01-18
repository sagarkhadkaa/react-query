import "./App.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { RQSuperHeroPage } from "./components/RQSuperHeroes.page";
import { HomePage } from "./components/Home.page";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/super-heroes">
                                    Traditional Super Heroes
                                </Link>
                            </li>
                            <li>
                                <Link to="/rq-super-heroes">
                                    RQ Super Heroes
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/super-heroes">
                            <SuperHeroesPage />
                        </Route>
                        <Route path="/rq-super-heroes">
                            <RQSuperHeroPage />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
