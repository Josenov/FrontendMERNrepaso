import React from 'react'
import { useState, useEffect } from 'react';

const Carrusel = () => {

    const images = [
        {
            "title": "Cordoba 1",
            "url": "https://www.lavoz.com.ar/resizer/5QsjoMx0MSXnJYAmcrjfcUCYVcI=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/MYVHKZRCYNGLNCPPT76W7NJ5RY.jfif"
        },
        {
            "title": "Cordoba 2",
            "url": "https://www.cordobaturismo.gov.ar/wp-content/uploads/2018/07/Ciudad-de-C%C3%B3rdoba-1-scaled.jpg"
        },
        {
            "title": "Cordoba 3",
            "url": "https://www.guiaturista.com.ar/wp-content/uploads/2022/01/cordoba-capital-1024x687-1.jpeg"
        }
    ]

    


    let [index, setIndex] = useState(0); //como es un array de img, empezara en el index 0

    const handlePrevBtn = () => {
        index > 0 ? setIndex(index - 1) : setIndex(2);
    };

    const handleNextBtn = () => {
        index < 2 ? setIndex(index + 1) : setIndex(0);
    };

    useEffect(() => {
        const timeCards = setInterval(() => {
            if (index < 2) {
                setIndex(index + 1)
            } else {
                setIndex(0)
            }
        }, 4000)
        return () => {
            clearInterval(timeCards)
        }
    }, [index])

    

    return (

        <>
            <h2>Carousel</h2>
            <img className='w-6/12 h-6/12 object-cover' src={images[index].url} alt="" />
            <p>{images[index].title}</p>
            <div className='flex gap-5'>
                <button onClick={handlePrevBtn}>Prev</button>
                <button onClick={handleNextBtn}>Next</button>
            </div>



        </>
    )
}

export default Carrusel