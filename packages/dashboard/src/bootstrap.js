import { createApp } from 'vue';
import Dashboard from './components/Dashboard'

const mount = (el) => {
   const app = createApp(Dashboard);
   app.mount(el);
}

if(process.env.NODE_ENV === 'development') {
    const el = document.getElementById('_dashboard-root')

    if(el){
        mount(el)
    }
}

export { mount }