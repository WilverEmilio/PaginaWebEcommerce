import GalleryDetailsOne from '@/components/gallery-details-1/GalleryDetailsOne';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = ({ params }: { params: { id: number } }) => {
    const id = params.id;
    return (
        <Wrapper>
            <main>
                <GalleryDetailsOne id={id} />
            </main>
        </Wrapper>
    );
};

export default page;