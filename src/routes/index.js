import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
            </Switch>
        </BrowserRouter>
    );
}