import React from 'react'

const Card = ( {name, country, image, description} ) => {
    return (
        <>
            <div className='flex sm:flex-col flex-wrap justify-center items-center w-[700px] m-2'>
                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg my-4">
                    <img
                        alt={name}
                        src={image}
                        className="h-56 w-full object-cover"
                    />

                    <div className="bg-white p-4 sm:p-6">
                        

                        <div>
                            <h2>{name}</h2>
                            <h3 className="mt-0.5 text-lg text-gray-900">{country}</h3>
                        </div>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            {description}
                        </p>
                    </div>
                </article>
            </div>


        </>
    )
}

export default Card