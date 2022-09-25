import AdvertLayout from '../components/layouts/advert/AdvertLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return <h1>Hello world</h1>;
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <main>
        {page}
        <AdvertLayout />
      </main>
    </PrimaryLayout>
  );
};
