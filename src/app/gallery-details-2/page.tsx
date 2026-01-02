import GalleryDetailsTwo from '@/components/gallery-details-2/GalleryDetailsTwo';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    const id = 2;
    return (
        <Wrapper>
            <main>
                <GalleryDetailsTwo id = {id} />
            </main>
        </Wrapper>
    );
};

export default page;