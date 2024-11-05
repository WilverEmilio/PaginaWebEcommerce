import ForgottenMain from '@/components/forgotten-pass/ForgottenMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <ForgottenMain />
            </main>
        </Wrapper>
    );
};

export default page;