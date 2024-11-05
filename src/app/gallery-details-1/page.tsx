import GalleryDetailsOne from '@/components/gallery-details-1/GalleryDetailsOne';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    const id = 1;
    return (
        <Wrapper>
            <main>
                <GalleryDetailsOne />
            </main>
        </Wrapper>
    );
};

export default page;