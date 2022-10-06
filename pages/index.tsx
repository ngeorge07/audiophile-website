import FeaturedProduct from '../components/cards/home-cards/featured-product/FeaturedProduct';
import HeroImage from '../components/cards/home-cards/hero-image/HeroImage';
import SecondFeatured from '../components/cards/home-cards/second-featured/SecondFeatured';
import ThirdFeatured from '../components/cards/home-cards/third-featured/ThirdFeatured';
import AdvertLayout from '../components/layouts/advert/AdvertLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import CategoriesSection from '../components/navigation/categories-section/CategoriesSection';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HeroImage />
      <CategoriesSection />
      <section className="mx-6 flex flex-col gap-6 md:gap-8 lg:gap-12 md:mx-10 lg:mx-40">
        <FeaturedProduct />
        <SecondFeatured />
        <ThirdFeatured />
      </section>
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
