import SignInMainArea from '@/components/SignIn/SignInMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <SignInMainArea />
            </main>
        </Wrapper>
    );
};

export default page;