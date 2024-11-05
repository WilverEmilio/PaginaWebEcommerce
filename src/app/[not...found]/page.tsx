import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ErrorImg from '../../../public/assets/img/bg/404.jpg';

const page = () => {
    return (
        <main>
            <div className="four-zero-area pt-100 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="four-zero-wrapper text-center">
                                <div className="four-zero-img">
                                    <Image src={ErrorImg} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                </div>
                                <div className="four-zero-text">
                                    <h1>Page Not Found</h1>
                                    <Link href="/" className="btn">Go To Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;