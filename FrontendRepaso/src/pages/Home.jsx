import Carrusel from '../components/Carrusel'
import { useEffect } from 'react'

const Home = () => {

    useEffect(()=>{

    },
    [])

    
    return (
        <>
            <div className="flex flex-col min-h-screen justify-center items-center gap-2 text-red-600 font-bold text-2xl" >
                <Carrusel/>
            </div>
            

        </>

    )
}

export default Home