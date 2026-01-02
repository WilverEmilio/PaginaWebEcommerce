'use client';

import ShopDetailsMain from '@/components/shop-details/ShopDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams();
  const id = params?.id;

  if (!id) return <p>Cargando...</p>;

  return (
    <Wrapper>
      <main>
        <ShopDetailsMain id={Number(id)} />
      </main>
    </Wrapper>
  );
}