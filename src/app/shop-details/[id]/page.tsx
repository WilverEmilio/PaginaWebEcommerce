import ShopDetailsMain from '@/components/shop-details/ShopDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';

const Page = ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);

  return (
    <Wrapper>
      <main>
        <ShopDetailsMain id={id} />
      </main>
    </Wrapper>
  );
};

export default Page;
