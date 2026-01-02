'use client';

import ServiceDetailsMain from '@/components/service-details/ServiceDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams();
  const id = params?.id;

  if (!id) return <p>Cargando...</p>;

  return (
    <Wrapper>
      <main>
        <ServiceDetailsMain id={Number(id)} />
      </main>
    </Wrapper>
  );
}