import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Cities from '../pages/Cities'
import Main from '../layout/Main'
import SignIn from '../pages/SignIn'
import CityDetails from '../pages/CityDetails'
import ProtectedRoute from '../router/ProtectedRoute'


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/cities',
                element: 
                            <Cities/> 
                        
            },
            ,
            {
                path:'/cities/:id',
                element: <CityDetails/>
            },
            {
                path:'/signin',
                element: (<ProtectedRoute path='/'>
                                <SignIn/> 
                        </ProtectedRoute>)
            },
            {
                path:'/404',
                element: <h1 className='text-3xl flex justify-center items-center h-screen'>
                            Pagina No Encontrada</h1>
            }
            
        ]
    },
    
])

export default router;