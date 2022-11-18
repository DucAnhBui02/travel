/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react"
import BrandTravel1 from '../assets/img/travel1.png'
import BrandTravel2 from '../assets/img/travel2.png'
import BrandTravel3 from '../assets/img/travel3.jpg'
import BrandTravel4 from '../assets/img/travel4.jpg'

export const ContentTop = () => {
    const items = [
        {
            id: 1,
            url: BrandTravel1,
            title: 'SET SAIL THE VIRGIN WAY',
            description: 'An epic sea change for all, a magical, striking, change for the better that is brought on by the sea.',
        },
        {
            id: 2,
            url: BrandTravel2,
            title: '180 DEGREES FROM ORDINARY',
            description: 'Hardly a cruise for everyone, but likely the cruise for you ...',
        },
        {
            id: 3,
            url: BrandTravel3,
            title: 'RETREAT AND RECONNECT',
            description: 'The Haven of Life: A beautiful sanctuary where enrichment thrives and lives change',
        },
        {
            id: 4,
            url: BrandTravel4,
            title: 'THE GIFT OF EXPLORATION',
            description: 'Five-star ships taking you to enchanting destination across Europe\'s magical waterways',
        },     
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    console.log(currentIndex)
    const GoToSlides = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            if(currentIndex === 3) {
                setCurrentIndex(0)
            } else {
                setCurrentIndex(prev => prev + 1)
            }
        },5000)

        return () => clearInterval(timer)
    },[currentIndex])

    return (       
        <div className='content-top'>
            <div className='content-view'>
            <div className='content-item fade' style={{backgroundImage: `url(${items[currentIndex].url})`}}>
                    <div className='content-info'>
                        <div className='content-wrap'>
                            <h3>{items[currentIndex].title}</h3>
                            <h4>{items[currentIndex].description}</h4>
                            <p><a href=''>Discover more</a></p>
                        </div>
                    </div>
                </div>
                <div className='content-btn'>
                    {items.map((slide, slideIndex) => (
                        <div className="dots" key={slideIndex} onClick={() => GoToSlides(slideIndex)}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}