"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopHeaderTwo from './TopHeaderTwo';
import useGlobalContext from '@/hooks/use-context';
import SearchBarModel from '@/components/common/SearchModel';
import HeaderCart from './HeaderCart';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Menus from './components/Menus';
import MobileMenus from './components/MobileMenus';
import Sidebar from './components/Sidebar';
import { responseType_home } from '../../../types/response';
import { useHomeStart } from '../../../api/getHomeStart';



const HeaderTwo = () => {

    const {resultH,loadingH, errorH} =  useHomeStart();

    const logo = resultH?.icon?.url
    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${resultH.icon.url}`
    : '';

    const { scrollDirection, inputTogglePage, toggleSideMenu, sideMenuOpen } = useGlobalContext()
    const [cartOpen, setCartOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const cartProducts = useSelector(
        (state: RootState) => state.cart.cartProducts
    );
    const uniqueProductIds = new Set();
    cartProducts.forEach((product) => uniqueProductIds.add(product.id));

    const quantityProduct = uniqueProductIds.size;

    return (
        <header>
            <TopHeaderTwo />
            <div className={scrollDirection === "down" ? "main-menu-area menu-area-2 sticky" : "main-menu-area"}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                            <div className="logo">
                                <Link href="/">
                                    <Image className="standard-logo"
                                        src={logo} width={100} height={100} alt="logo" />
                                    <Image className="retina-logo"
                                        src={logo} width={100} height={100} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 d-none d-xl-block d-lg-block">
                            <div className="header-right f-right">
                                <ul>
                                        <li className="search-icon" onClick={inputTogglePage}>
                                            <button>
                                                <i className="dripicons-search"></i>
                                            </button>
                                        </li>
                                    {/* <li className="unser-icon">
                                        <button>
                                            <i className="dripicons-user"></i>
                                        </button>
                                    </li> */}
                                    <li className="cart-icon" onClick={() => { setCartOpen(!cartOpen) }}>
                                        <button>
                                            <i className="dripicons-cart"></i>
                                        </button>
                                        <span>{quantityProduct}</span>
                                    </li>
                                    <li className={sidebarOpen ? "info-bar active" : "info-bar"} >
                                        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                                            <i className="dripicons-vibrate"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="main-menu text-right f-right">
                                <nav>
                                    <ul>
                                        <Menus />
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="d-block d-xl-none d-lg-none col-md-8 col-6 text-right">
                            <div className="menu-bar" onClick={toggleSideMenu}>
                                <button className="bars">
                                    <i className='fas fa-bars'> </i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SearchBarModel />
            <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
            <MobileMenus />
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div onClick={toggleSideMenu} className={sideMenuOpen ? "body-overlay show" : "body-overlay"}></div>
            <div onClick={() => setCartOpen(false)} className={cartOpen ? "body-overlay show" : "body-overlay"}></div>
            <div onClick={() => setSidebarOpen(false)} className={sidebarOpen ? "body-overlay show" : "body-overlay"}></div>
        </header>
    );
}

export default HeaderTwo;