import Link from 'next/link';
import React, { useState } from 'react';
import Logo from "../../../public/assets/img/logo/logo-white2.png";
import Logo2 from "../../../public/assets/img/logo/logo-white2@2x.png";
import Image from 'next/image';
import useGlobalContext from '@/hooks/use-context';
import SearchBarModel from '@/components/common/SearchModel';
import HeaderCart from './HeaderCart';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Menus from './components/Menus';
import MobileMenus from './components/MobileMenus';
import Sidebar from './components/Sidebar';

const HeaderThere = () => {
    const { inputTogglePage, scrollDirection, toggleSideMenu, sideMenuOpen } = useGlobalContext()
    const [cartOpen, setCartOpen] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const cartProducts = useSelector(
        (state: RootState) => state.cart.cartProducts
    );
    const uniqueProductIds = new Set();
    cartProducts.forEach((product) => uniqueProductIds.add(product.id));

    const quantityProduct = uniqueProductIds.size;

    return (
        <header className="header-transparent">
            <div className={scrollDirection === "down" ? "main-menu-area header-3 sticky" : "main-menu-area header-3"}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                            <div className="logo">
                                <Link href="/">
                                    <Image className="standard-logo" style={{ width: "auto", height: "auto" }} src={Logo} alt="logo" />
                                    <Image className="retina-logo" style={{ width: "auto", height: "auto" }} src={Logo2} alt="image not found" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 d-none d-xl-block d-lg-block">
                            <div className="main-menu text-right f-right">
                                <nav>
                                    <ul>
                                        <Menus />
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 d-none d-xl-block d-lg-block">
                            <div className="header-right f-right">
                                <ul>
                                    <li className="search-icon" onClick={inputTogglePage}>
                                        <button>
                                            <i className="dripicons-search"></i>
                                        </button>
                                    </li>
                                    <li className="unser-icon">
                                        <button>
                                            <i className="dripicons-user"></i>
                                        </button>
                                    </li>
                                    <li className="cart-icon" onClick={() => { setCartOpen(!cartOpen) }}>
                                        <button>
                                            <i className="dripicons-cart"></i>
                                        </button>
                                        <span>{quantityProduct}</span>
                                    </li>
                                    <li className={sidebarOpen ? "info-bar active" : "info-bar"} onClick={() => setSidebarOpen(!sidebarOpen)}>
                                        <button>
                                            <i className="dripicons-vibrate"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-block d-xl-none d-lg-none col-md-8 col-6 text-right">
                            <div className="menu-bar" onClick={toggleSideMenu}>
                                <button className="bars">
                                    <i className='fas fa-bars'></i>
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
};

export default HeaderThere;