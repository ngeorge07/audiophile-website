import Image from 'next/image';
import useWindowWidth from '../../../utils/useWindowWidth';

export interface IAdvert {}

const AdvertLayout: React.FC<IAdvert> = () => {
  const { screenWidth } = useWindowWidth();

  return (
    <section className="px-6 my-32 flex flex-col text-center md:px-10 md:my-24 lg:my-48 lg:flex-row-reverse lg:px-40 lg:text-left lg:items-center">
      <Image
        src={`/shared/${
          screenWidth < 600
            ? 'mobile'
            : screenWidth < 1050
            ? 'tablet'
            : 'desktop'
        }/image-best-gear.jpg`}
        alt="Picture of the author"
        width={screenWidth < 600 ? '654' : screenWidth < 1050 ? '1378' : '540'}
        height={screenWidth < 1050 ? '600' : '588'}
        className="rounded-lg"
      />

      <div className="lg:pr-[125px] lg:w-[80%] xl:w-[53%]">
        <h2 className="font-h4 mt-10 mb-8 lg:font-h2">
          Bringing you the <span className="text-accent1">best</span> audio gear
        </h2>
        <p className="font-body opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default AdvertLayout;
