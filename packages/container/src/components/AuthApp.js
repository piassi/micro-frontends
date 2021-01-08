import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

export default function AuthApp({ onSignIn }) {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;

                if(pathname !== nextPathname){
                    history.push(nextPathname);
                }
            },
            onSignIn,
            initialPath: history.location.pathname
        });

        history.listen(onParentNavigate)
    }, []);

    return <div ref={ref} />;
}