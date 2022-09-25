import AdvertLayout from '../components/layouts/advert/AdvertLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Headphones: NextPageWithLayout = () => {
  return <h1>Test layout rerendering</h1>;
};

export default Headphones;

Headphones.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <main>
        {page}
        <AdvertLayout />
      </main>
    </PrimaryLayout>
  );
};
