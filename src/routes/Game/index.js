import {Route, Switch, useRouteMatch} from "react-router-dom";

import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import {PokemonContext} from "../../context/pokemonContext";
import {useState} from "react";

const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({});
    const [player2Pokemons, setPlayer2Pokemons] = useState({});
    const match = useRouteMatch();

    const handleSelectedPokemons = (key, pokemon) => {
        setSelectedPokemons(prevState => {
            if (prevState[key]){
                const copyState = {...prevState};
                delete copyState[key];

                return copyState;
            }

            return {
                ...prevState,
                [key]: pokemon,
            }
        })
    }

    const handleOnSetPlayer2Pokemons = (data) => {
        setPlayer2Pokemons(data)
        console.log('setPlayer2Pokemons', data)
    }

    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemons,
            pokemons2: player2Pokemons,
            onSelectPokemons: handleSelectedPokemons,
            onSetPlayer2Pokemons: handleOnSetPlayer2Pokemons
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
