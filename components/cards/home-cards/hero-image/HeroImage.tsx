import Image from 'next/image';
import useWindowWidth from '../../../../utils/useWindowWidth';
import PrimaryButton from '../../../buttons/primary-button/PrimaryButton';

export interface IHeroImage {}

const HeroImage: React.FC<IHeroImage> = () => {
  const { screenWidth } = useWindowWidth();
  const imagePath =
    screenWidth < 600 ? 'mobile' : screenWidth < 1050 ? 'tablet' : 'desktop';

  return (
    <section className="relative -z-10">
      <Image
        src={`/home/${imagePath}/image-header.jpg`}
        alt="Picture of the author"
        width={screenWidth < 600 ? '750' : screenWidth < 1050 ? '1536' : '1440'}
        height={
          screenWidth < 600 ? '1200' : screenWidth < 1050 ? '1458' : '729'
        }
        sizes="(min-width: 1050px) 100vw"
        quality={100}
        priority={true}
      />

      <div className="flex flex-col absolute top-1/2 -translate-y-1/3 w-full px-6 text-center items-center md:-translate-y-[40%] md:px-48 lg:px-40 lg:text-left lg:items-start lg:max-w-[750px]">
        <span className="font-overline text-white opacity-50">NEW PRODUCT</span>
        <h3 className="font-h2 text-[36px] leading-10 text-white mt-4 mb-6 md:text-h1 md:my-6">
          XX99 Mark II HeadphoneS
        </h3>
        <p className="font-body text-white opacity-75 mb-7 md:mb-10">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <PrimaryButton
          ghost={false}
          label="see product"
          as="a"
          path="headphones/xx99-mark-two-headphones"
        />
      </div>
    </section>
  );
};

export default HeroImage;
