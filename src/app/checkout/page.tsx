import CheckoutMain from '@/components/checkout/CheckoutMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <CheckoutMain />
            </main>
        </Wrapper>
    );
};

export default page;