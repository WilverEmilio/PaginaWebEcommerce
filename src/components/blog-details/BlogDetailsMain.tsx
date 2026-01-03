'use client';

import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';
import SidebarArea from '../blog/SidebarArea';
import Image from 'next/image';
import BlogPostRelated from './BlogPostRelated';
import BlogPostArrow from './BlogPostArrow';
import BlogPostAuthor from './BlogPostAuthor';
import BlogComments from './BlogComments';
import BlogCommentForm from '@/form/blog-comment-form';
import { idType } from '@/interFace/interFace';
import blog_data from '@/data/blog-data';

const BlogDetailsMain = ({ id }: idType) => {
    const blogData: any = blog_data.find((item) => item.id == id)
    return (
        <>
            <Breadcrumb title="Blog Details" subTitle="Blog Details" />
            <div className="blog-area gray-bg pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <article className="postbox post format-image mb-40">
                                <div className="postbox__thumb">
                                    <Image src={blogData.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                </div>
                                <div className="postbox__text p-50">
                                    <div className="post-meta mb-15">
                                        <span>
                                            <i className='fas fa-calendar-check'></i> September 15, 2018
                                        </span>
                                        <span>
                                            <Link href="#"><i className='fas fa-user'></i> Diboli B. Joly</Link>
                                        </span>
                                        <span>
                                            <Link href="#"><i className='fas fa-comments'></i> 23 Comments</Link>
                                        </span>
                                    </div>
                                    <h3 className="blog-title">{blogData?.title}</h3>
                                    <div className="post-text mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Bccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                                    <BlogPostRelated />
                                    <BlogPostArrow />
                                </div>
                                <BlogPostAuthor />
                                <BlogComments />
                                <BlogCommentForm />
                            </article>
                        </div>
                        <SidebarArea />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetailsMain;