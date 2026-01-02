'use client';

import ShopDetailsMain from '@/components/shop-details/ShopDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const id = Number(params.id);

  if (!id) return <p>Cargando...</p>;

  return (
    <Wrapper>
      <main>
        <ShopDetailsMain id={id} />
      </main>
    </Wrapper>
  );
}
