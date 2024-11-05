import GalleryDetailsTwo from '@/components/gallery-details-2/GalleryDetailsTwo';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = ({ params }: { params: { id: number } }) => {
    const id = params.id;
    return (
        <Wrapper>
            <main>
                <GalleryDetailsTwo id={id} />
            </main>
        </Wrapper>
    );
};

export default page;