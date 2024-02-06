
import Card from '../components/Card'
import { Link as LinkRouter } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'



const Cities = () => {

    let inputSearch = useRef();

    

    const [cities, setCities] = useState();

    useEffect(()=>{
        axios.get('http://localhost:7000/api/cities?name=')
            .then(response=>setCities(response.data.cities))
            .catch(error=>console.log(error))

    },[])


    const handleInputChange = async (event)=>{
        const name = inputSearch.current.value
        try {
            const response = await axios.get(`http://localhost:7000/api/cities?name=${name}`)
            setCities(response.data.cities)
            
        } catch (error) {
            if(error.response.status === 404){
                console.log("No se encontraron ciudades")
                setCities([])
            }else{
                console.log(error)
            }
            
        }
    }



    return (
        <>
        <div className='flex flex-col justify-center items-center'>
            <h2 className='  m-4 text-2xl text-red-700 font-bold'>Cities</h2>
            <div className='flex'>
            <input ref={inputSearch} className='flex justify-center border-2 border-gray-700 rounded-md py-1 px-2' type="text" placeholder='buscar' />
            <button onClick={handleInputChange} className='ml-4 px-4 py-2 border-2 border-blue-900'>Buscar</button>
            </div>
            
        </div>
            
            
            
            <div className='flex flex-wrap justify-center items-center min-h-screen '>
                
                {
                    cities?.length > 0 ?
                    cities?.map((city)=>{
                        return(
                            <LinkRouter key={city._id}  to={`/cities/${city._id}`}>
                                <Card name={city.name} country={city.country} image={city.image} description={city.description} />
                            </LinkRouter>
                        )
                    })

                    : <div className='flex justify-center items-center text-5xl '>
                        <h1 > No se encontraron ciudades</h1>
                    </div> 
                    

                }


            </div>

            
            


        </>
    )
}

export default Cities