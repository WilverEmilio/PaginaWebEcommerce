import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';
import img1 from '../../../public/assets/img/gallery/gallery-custom/01.jpg';
import img2 from '../../../public/assets/img/gallery/gallery-custom/02.jpg';
import img3 from '../../../public/assets/img/gallery/gallery-custom/03.jpg';
import img4 from '../../../public/assets/img/gallery/gallery-custom/04.jpg';
import Image from 'next/image';
import RelatedProduct from '../gallery-details-2/RelatedProduct';
import BrandSection from '../Elements/brand/BrandSection';
import { idType } from '@/interFace/interFace';
import gallary_data from '@/data/gallary-data';

const GallaryDetailsThree = ({ id }: idType) => {
    const gallaryData: any = gallary_data.find((item) => item.id == id)
    return (
        <>
            <Breadcrumb title='Gallary Details-3' subTitle='Gallary Details' />
            <div className="gallery-layout-area pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-7 mb-30">
                            <div className="gallery-peralux-img mb-60">
                                {
                                    gallaryData ?
                                        <Image src={gallaryData.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                        :
                                        <Image src={img1} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                }

                            </div>
                            <div className="gallery-peralux-img mb-60">
                                <Image src={img2} style={{ width: "100%", height: "auto" }} alt="image not found" />
                            </div>
                            <div className="gallery-peralux-img mb-60">
                                <Image src={img3} style={{ width: "100%", height: "auto" }} alt="image not found" />
                            </div>
                            <div className="gallery-peralux-img">
                                <Image src={img4} style={{ width: "100%", height: "auto" }} alt="image not found" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 mb-30">
                            <div className="gallery-peralux-wrapper">
                                <div className="gallery2-layout-text">
                                    <h1>{gallaryData ? gallaryData.title : "Natural Fresh Tomato"}</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                                        omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                        rem aperiam, eaque ipsa quae ab illo inventore </p>
                                </div>
                                <div className="gallery2-layout-bg"
                                    style={{ backgroundImage: `url(${'assets/img/gallery/gallery-custom/3.jpg'})` }}>
                                    <div className="gallery-layout-info">
                                        <span>Clients:</span>
                                        <h5>PitarRhodus</h5>
                                    </div>
                                    <div className="gallery-layout-info">
                                        <span>Date</span>
                                        <h5>05 Jan 2019</h5>
                                    </div>
                                    <div className="gallery-layout-info">
                                        <span>Role</span>
                                        <h5>Organic Food</h5>
                                    </div>
                                    <div className="gallery-layout-info">
                                        <span>View Site</span>
                                        <h5>https://zomataorganic.com/</h5>
                                    </div>
                                </div>
                                <div className="gallery-post-tag">
                                    <span>Project Tags : </span>
                                    <Link href="#">Organic,</Link>
                                    <Link href="#">mata,</Link>
                                    <Link href="#">Food, </Link>
                                    <Link href="#">Fruits </Link>
                                </div>
                                <div className="gallery-share-icon">
                                    <span>Project Share : </span>
                                    <Link href="https://www.facebook.com/"> <i className='fab fa-facebook-f'> </i></Link>
                                    <Link href="https://twitter.com/"> <i className='fab fa-twitter'> </i></Link>
                                    <Link href="https://www.linkedin.com/"> <i className='fab fa-linkedin'> </i></Link>
                                    <Link href="https://www.youtube.com/"> <i className='fab fa-youtube'> </i></Link>
                                    <Link href="https://www.behance.net/"> <i className='fab fa-behance'> </i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProduct />
            <BrandSection />
        </>
    );
};

export default GallaryDetailsThree;