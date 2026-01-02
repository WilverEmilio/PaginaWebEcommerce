'use client';
import ServiceDetailsMain from '@/components/service-details/ServiceDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import { useParams } from 'next/navigation';

const page = ({params}: {params: {id: string} }) => {
    const {id} = useParams();

    if (!id) return <p>Cargando...</p>;

    return (
        <Wrapper>
            <main>
                <ServiceDetailsMain id={Number(id)}/>
            </main>
        </Wrapper>
    );
};

export default page;