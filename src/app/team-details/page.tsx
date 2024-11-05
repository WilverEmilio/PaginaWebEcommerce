import TeamDetilsMain from '@/components/team-details/TeamDetilsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    const id = 11;
    return (
        <Wrapper>
            <main>
                <TeamDetilsMain id={id} />
            </main>
        </Wrapper>
    );
};

export default page;