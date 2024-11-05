import Link from 'next/link';
import React from 'react';
import ShopContent from './ShopContent';
import CommentImg from '../../../public/assets/img/product/comments/01.png';
import CommentImg2 from '../../../public/assets/img/product/comments/02.png';
import Image from 'next/image';
import ReviewForm from '@/form/review-form';

const ProductReview = () => {
    return (
        <div className="product-review">
            <div>
                <ul className="nav review-tab" id="nav-tab" role="tablist">
                    <li className="nav-item">
                        <Link id="pro-info-1-tab active show" data-bs-toggle="tab" href="#pro-info-1" role="tab" aria-selected="true" aria-disabled="false" className="nav-link">Description</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" id="pro-info-2-tab" data-bs-toggle="tab" href="#pro-info-2" role="tab" aria-selected="false" aria-disabled="false">Reviews (2)</Link>
                    </li>
                </ul>
                <div className="tab-content">
                    <ShopContent />
                    <div className='tab-pane fade' id="pro-info-2" role="tabpanel">
                        <div className="review-text mt-30">
                            <div className="product-commnets">
                                <div className="product-commnets-list">
                                    <div className="pro-comments-img">
                                        <Image src={CommentImg} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                    </div>
                                    <div className="pro-commnets-text">
                                        <h4>Roger West - <span>June 5, 2017</span></h4>
                                        <div className="pro-rating">
                                            <i className='fas fa-star'></i>
                                            <i className='fas fa-star'></i>
                                            <i className='fas fa-star'></i>
                                            <i className='fas fa-star'></i>
                                            <i className='fas fa-star'></i>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation.
                                        </p>
                                    </div>
                                </div>
                                <div className="product-commnets-list mt-30">
                                    <div className="pro-comments-img">
                                        <Image src={CommentImg2} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                    </div>
                                    <div className="pro-commnets-text">
                                        <h4>Roger West -
                                            <span>June 5, 2017</span>
                                        </h4>
                                        <div className="pro-rating">
                                            <i className='fas fa-star'></i>
                                            <i className='fas fa-star'></i>
                                            <i className='fas fa-star'></i>
                                            <i className='fas fa-star'></i>
                                            <i className='fas fa-star'></i>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-40">
                            <div className="col-xl-7">
                                <div className="review-box">
                                    <h4>Add a Review</h4>
                                    <div className="your-rating mb-40">
                                        <span>Your Rating : </span>
                                        <div className="rating-list">
                                            <Link href="#">
                                                <i className='fas fa-star'></i>
                                            </Link>
                                            <Link href="#">
                                                <i className='fas fa-star'></i>
                                            </Link>
                                            <Link href="#">
                                                <i className='fas fa-star'></i>
                                            </Link>
                                            <Link href="#">
                                                <i className='fas fa-star'></i>
                                            </Link>
                                            <Link href="#">
                                                <i className='fas fa-star'></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <ReviewForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReview;