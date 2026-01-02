'use client';
import ShopDetailsMain from '@/components/shop-details/ShopDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import { useParams } from 'next/navigation';
import React from 'react';

const page = ({ params }: { params: { id: string } }) => {
    const { id } = useParams();
     // Si no hay ID, muestra un mensaje de carga
     if (!id) return <p>Cargando...</p>;

     return (
         <Wrapper>
             <main>
                 <ShopDetailsMain id={Number(id)} />
             </main>
         </Wrapper>
     );
};

export default page;