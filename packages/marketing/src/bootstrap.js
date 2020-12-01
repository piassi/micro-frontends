import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

if(process.env.NODE_ENV === 'development') {
    const el = document.getElementById('_marketing-root')

    if(el){
        mount(el)
    }
}

export { mount }