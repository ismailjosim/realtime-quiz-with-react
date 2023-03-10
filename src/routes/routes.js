import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Quiz from '../pages/Quiz';
import Result from '../pages/Result';
import SignUp from '../pages/SignUp';



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <h3>404 - Page Not Found!</h3>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/quiz/:id',
                element: <Quiz />
            },
            {
                path: '/result',
                element: <Result />
            }
        ]
    }
])
export default routes;
