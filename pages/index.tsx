import FeaturedProduct from '../components/cards/home-cards/featured-product/FeaturedProduct';
import HeroImage from '../components/cards/home-cards/hero-image/HeroImage';
import AdvertLayout from '../components/layouts/advert/AdvertLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import CategoriesSection from '../components/navigation/categories-section/CategoriesSection';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HeroImage />
      <CategoriesSection />
      <FeaturedProduct />
    </>
  );
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
