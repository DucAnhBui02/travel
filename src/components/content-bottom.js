/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import BrandTravel5 from '../assets/img/travel5.jpg'
import BrandTravel6 from '../assets/img/travel6.jpg'
import BrandTravel7 from '../assets/img/travel7.jpg'
import BrandTravel8 from '../assets/img/travel8.jpg'
import BrandTrave9 from '../assets/img/travel9.jpg'

export const ContentBottom = () => {
    return (
            <div className='content-bottom'>
                <div className='bottom-section'>
                    <div className='bottom-wrap'>
                        <h3>Brands We Represent</h3>
                        <p>Travel the World represents a select number of premium brands, with the responsibility of increasing awareness and promoting these boutique travel companies within the Australian travel market.</p>
                        <div className='bottom-imgs'>
                            <div className='img-item'>
                                <a>
                                    <img width={261} height={234} src={BrandTravel5}/>
                                    <h3>Windstar Australia</h3>
                                </a>                           
                            </div>
                            <div className='img-item'>
                                <a>
                                    <img width={261} height={234} src={BrandTravel6}/>
                                    <h3>Chiva-Som</h3>
                                </a>                           
                            </div>
                            <div className='img-item'>
                                <a>
                                    <img width={261} height={234} src={BrandTravel7}/>
                                    <h3>Riviera Travel</h3>
                                </a>                           
                            </div>
                            <div className='img-item'>
                                <a>
                                    <img width={261} height={234} src={BrandTravel8}/>
                                    <h3>Virgin Voyages</h3>
                                </a>                           
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom-section'>
                    <div className='bottom-wrap'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <h3>Brands We Partner With</h3>
                                <p>"Combining our extensive industry knowledge with the experiences gained from representing luxury brands, Travel the World has created successful partnerships with a number of brands including <a href='#'>Holland</a>, <a href='#'>America Line</a>, <a href='#'>Seabourn</a>, <a href='#'>Silversea</a>, <a href='#'>Aqua Expeditions</a>, <a href='#'>POTANT</a>, and <a href='#'>Swan Hellenic</a>. By working closely together with the aim of growing market share, we have been able to implement a number of different strategies to fulfil mutually beneficial goals.</p>
                                <p><a href='#'>Find out more</a></p>
                            </div>
                            <div className='col-md-4'>
                                <div className='bottom-imgs'>
                                    <img src={BrandTrave9}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}