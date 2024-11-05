import CartMain from '@/components/cart/CartMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <CartMain />
            </main>
        </Wrapper>
    );
};

export default page;