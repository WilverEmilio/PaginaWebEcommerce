import TeamDetilsMain from '@/components/team-details/TeamDetilsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = ({ params }: { params: { id: number } }) => {
    const id = params.id;
    return (
        <Wrapper>
            <main>
                <TeamDetilsMain id={id} />
            </main>
        </Wrapper>
    );
};

export default page;