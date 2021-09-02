import Home from './Home';
import Login from './Login';
import Register from './Register';
////////////////////////////////////////  DYNAMIC ROUTES FOR APP COMPONENT ////////////////////////////////////


const routes = [{
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/payment',
        exact: true,
        component: Login,
    },
    {
        path: '/register',
        exact: true,
        component: Register,
    },


]
export default routes;