import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';

import Header from '../components/Header';

export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
            </Switch>
        </BrowserRouter>
    );
}