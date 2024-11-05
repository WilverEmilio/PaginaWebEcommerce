import Link from 'next/link';
import React from 'react';

interface socialWrapperClass {
    WrapperClass: string;
}

const SocialIcon = ({ WrapperClass }: socialWrapperClass) => {
    return (
        <div className={WrapperClass}>
            <Link href="https://www.facebook.com/"> <i className='fab fa-facebook-f'> </i></Link>
            <Link href="https://twitter.com/"> <i className='fab fa-twitter'> </i></Link>
            <Link href="https://www.linkedin.com/"> <i className='fab fa-linkedin'> </i></Link>
            <Link href="https://www.youtube.com/"> <i className='fab fa-youtube'> </i></Link>
            <Link href="https://www.behance.net/"> <i className='fab fa-behance'> </i></Link>
        </div>
    );
};

export default SocialIcon;