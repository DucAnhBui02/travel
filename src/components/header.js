/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Container, Nav} from 'react-bootstrap'
import LogoImg from '../assets/img/ttw-logo.png'
export const Header = () => {
    return (
        <header id="masthead" className="site-header">
            <Container>
                <div className="header-logo">
                    <div className='logo-brand'>
                        <a href="">
                            <img src={LogoImg} alt="logo-brand"/>
                        </a>
                    </div>
                </div>
                <Nav className="main-navigations">
                    <div className="top-navigation">
                        <div className="menu-top-navigation">
                            <ul className='menu-top'>
                                <li><a href=''>About us</a></li>
                                <li><a href=''>Contact us</a></li>
                                <li><a href=''>Subscribe</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="bottom-navigation">
                        <div className="menu-bottom-navigation">
                            <ul className='menu-bottom'>
                                <li className="menu-item"><a href=''>Brands We Represent</a>
                                    <ul className='menu-bottom-sub'>
                                        <li className='menu-sub-item'><a href=''>Windstar Australia</a></li>
                                        <li className='menu-sub-item'><a href=''>Windstar Australia</a></li>
                                        <li className='menu-sub-item'><a href=''>Windstar Australia</a></li>
                                        <li className='menu-sub-item'><a href=''>Windstar Australia</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item"><a href=''>Brands We Partner With</a>
                                    <ul className='menu-bottom-sub'>
                                        <li className='menu-sub-item'><a href=''>Windstar Australia</a></li>
                                        <li className='menu-sub-item'><a href=''>Windstar Australia</a></li>
                                        <li className='menu-sub-item'><a href=''>Windstar Australia</a></li>
                                        <li className='menu-sub-item'><a href=''>Windstar Australia</a></li>
                                        <li className='menu-sub-item'><a href=''>Windstar Australia</a></li>
                                        <li className='menu-sub-item'><a href=''>Windstar Australia</a></li>                                       
                                    </ul>
                                </li>
                                <li className="menu-item"><a href=''>Group, Incentive and Charter Travel</a></li>
                                <li className="menu-item"><a href=''>For Travel Angents</a>
                                    <ul className='menu-bottom-sub'>
                                        <li className='menu-sub-item'><a href=''>Windstar Australia</a></li>
                                        <li className='menu-sub-item'><a href=''>Windstar Australia</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Nav>
            </Container>
        </header>
    )
}