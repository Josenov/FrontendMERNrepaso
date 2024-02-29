
import Card from '../components/Card'
import { Link as LinkRouter } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {filterCities, getCities} from '../store/actions/cityActions'




const Cities = () => {

    let inputSearch = useRef();

    const dispatch = useDispatch();

    
    

    const cities = useSelector((store)=>store.cityReducer.cities)
    
    

    useEffect(()=>{
        dispatch(getCities())

    },[])


    const handleInputChange = async ()=>{
        
        try {
            dispatch(filterCities({
                name: inputSearch.current.value
            }))
            
        } catch (error) {
            if(error.response.status === 404){
                console.log("No se encontraron ciudades")
                
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