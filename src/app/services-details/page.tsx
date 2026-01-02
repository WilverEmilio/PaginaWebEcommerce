'use client';

import ServiceDetailsMain from '@/components/service-details/ServiceDetailsMain';
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
        <ServiceDetailsMain id={id} />
      </main>
    </Wrapper>
  );
}
