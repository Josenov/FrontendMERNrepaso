
import Card from '../components/Card'
import { Link as LinkRouter } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'



const Cities = () => {

    

    const [cities, setCities] = useState();

    useEffect(()=>{
        axios.get('http://localhost:7000/api/cities?name=')
            .then(response=>setCities(response.data.cities))
            .catch(error=>console.log(error))

    },[])


    const handleInputChange = async (event)=>{
        console.log(event.target.value)
        try {
            const response = await axios.get(`http://localhost:7000/api/cities?name=${event.target.value}`)
            setCities(response.data.cities)
            
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
        <div className='flex flex-col justify-center items-center'>
            <h2 className='  m-4 text-2xl text-red-700 font-bold'>Cities</h2>
            <input onChange={handleInputChange} className='flex justify-center border-2 border-gray-700 rounded-md py-1 px-2' type="text" placeholder='buscar' />
        </div>
            
            
            
            <div className='flex flex-wrap justify-center items-center ml-96 '>
            
                
                {
                    cities?.map((city)=>{
                        return(
                            <LinkRouter key={city._id}  to={`/cities/${city._id}`}>
                                <Card name={city.name} country={city.country} image={city.image} description={city.description} />
                            </LinkRouter>
                        )
                    })

                }


            </div>

            
            


        </>
    )
}

export default Cities