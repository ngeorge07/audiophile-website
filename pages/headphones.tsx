import HeroImage from '../components/cards/hero-image/HeroImage';
import AdvertLayout from '../components/layouts/advert/AdvertLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Headphones: NextPageWithLayout = () => {
  return <HeroImage />;
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
