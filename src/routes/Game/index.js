import {Route, Switch, useRouteMatch} from "react-router-dom";

import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import {PokemonContext} from "../../context/pokemonContext";

let pokemonsSelected = []

const GamePage = () => {
    const match = useRouteMatch();
    return (
        <PokemonContext.Provider value={{
            pokemons: pokemonsSelected
        }}>

            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage}/>
                <Route path={`${match.path}/board`} component={BoardPage}/>
                <Route path={`${match.path}/finish`} component={FinishPage}/>
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;
