import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'page/app';
import Index from 'page/index';
import NotFound from 'page/not-found';

const Routes = (
    <Route path="/" component={App}>
        <Route path="*" component={Index} />
    </Route>
);

export default Routes;