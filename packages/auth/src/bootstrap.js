import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './app'

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    const history = defaultHistory || createMemoryHistory({ 
        initialEntries: [initialPath]
    });

    if(onNavigate){
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} onSignIn={onSignIn} />,
        el
    )

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const {pathname} = history.location;

            if(pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
}

if(process.env.NODE_ENV === 'development') {
    const el = document.getElementById('_auth-root')

    if(el){
        mount(el, { defaultHistory: createBrowserHistory() })
    }
}

export { mount }