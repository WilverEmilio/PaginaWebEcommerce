import GallaryDetailsThree from '@/components/gallary-details-3/GallaryDetailsThree';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = ({ params }: { params: { id: number } }) => {
    const id = params.id;
    return (
        <Wrapper>
            <main>
                <GallaryDetailsThree id={id} />
            </main>
        </Wrapper>
    );
};

export default page;