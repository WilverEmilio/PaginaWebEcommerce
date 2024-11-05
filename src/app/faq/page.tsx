import FaqMainArea from '@/components/faq/FaqMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <FaqMainArea />
            </main>
        </Wrapper>
    );
};

export default page;