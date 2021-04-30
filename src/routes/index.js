import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Hats from '../pages/Hats';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/hats" exact component={Hats} />
            </Switch>
        </BrowserRouter>
    );
}