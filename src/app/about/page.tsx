import AboutMainArea from '@/components/about/AboutMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <AboutMainArea />
            </main>
        </Wrapper>
    );
};

export default page;