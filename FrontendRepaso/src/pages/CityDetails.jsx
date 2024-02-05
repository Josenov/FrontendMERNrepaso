import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from 'axios'

const CityDetails = () => {
    const { id } = useParams();

    const [cities, setCities] = useState();

    useEffect(()=>{
        axios.get(`http://localhost:7000/api/cities/${id}`)
            .then(response=>setCities(response.data.oneCity))
            
            .catch(error=>console.log(error))
            

    },[])

    return (
        <>
        <div>
            {  
                <section className="flex flex-col justify-center items-center">
                <h4 className="text-lg font-bold ">
                    Id nro: {id}
                </h4>
                <div className="text-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            {cities?.name}
                        </h2>
                        <h3 className="text-xl font-bold ">
                            {cities?.country}
                        </h3>
                        <img
                                alt={cities?.name}
                                src={cities?.image}
                                className="h-64 w-auto"
                            />
                            <p className="">
                                    {cities?.description}

                                </p>
                        <div className="relative overflow-hidden sm:h-80 lg:h-full">
                            
                        </div>

                    </div>

                    <div className="flex">
                        

                        <div className="text-center lg:py-16">
                            <article className="text-center space-y-4 text-gray-600">
                                

                            </article>
                        </div>
                    </div>
                </div>
            </section>
            }
            
        </div>

        </>
    )
}

export default CityDetails