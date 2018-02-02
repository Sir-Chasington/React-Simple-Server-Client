import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom';

import App from '../components/App';
import renderFullPage from './renderFullPage';

export default function sendResponse(res, req, data) {
    
    const context = {};
    
    const html = renderToString(
        <StaticRouter context={context} location={req.url} >
            <App data={data} />
        </StaticRouter>
    );

    res.status(200).send(renderFullPage(html, data));

};