import ServiceDetailsMain from '@/components/service-details/ServiceDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = ({ params }: { params: { id: number } }) => {
    const id = params.id;
    return (
        <Wrapper>
            <main>
                <ServiceDetailsMain id={id} />
            </main>
        </Wrapper>
    );
};

export default page;