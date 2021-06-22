import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/CollectionsOverview';
import Collection from '../Collection';

const Shop = ({ match }) => (
    <div className='shop-page'>
        <Route path={`${match.path}`} exact component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
);

export default Shop;