import s from './App.css';
import {useRouteMatch, Route, Switch, Redirect} from 'react-router-dom';
import classNames from 'classnames'

import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import GamePage from "./routes/Game";
import HomePage from "./routes/Home";
import NotFoundPage from "./routes/NotFound";
import MenuHeader from "./routes/MenuHeader";
import Footer from './components/Footer';

const App = () => {
    const match = useRouteMatch('/')
    return (
        <Switch>
            <Route path="/404" component={NotFoundPage}/>

            <Route>
                <>
                    <MenuHeader gbActive={!match.isExact}/>
                    <div className={classNames(s.wrap, {[s.isHomePage]: match.isExact})}>
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/home" component={HomePage}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route path="/contact" component={ContactPage}/>
                            <Route path="/game" component={GamePage}/>
                            <Route render={() => (<Redirect to="/404"/>)}/>
                        </Switch>
                    </div>
                    <Footer/>
                </>
            </Route>
        </Switch>
    )
}

export default App;
