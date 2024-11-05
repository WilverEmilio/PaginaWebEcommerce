import BlogMainArea from '@/components/blog/BlogMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <BlogMainArea />
            </main>
        </Wrapper>
    );
};

export default page;