import { matchPath } from 'react-router-dom';

import sendResponse from './sendResponse';
import routes from './routes';

export default function router(req, res) {

    const match = routes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true}) || acc, null);

    if (!match) {
        //oops page todo
        res.status(404).send('page not found');
        return;
    }
    
    if (req.url == '/') {
        return sendResponse(res, req, null);
    } else if (req.url.includes('/page')) {
        console.log('we in here')
        // can get some form of data here and send through sendResponse(res, req, data);
        return sendResponse(res, req, null);
    }
    else {
        //oops page todo
        res.status(404).send('No Page Found');
    }
    
};
