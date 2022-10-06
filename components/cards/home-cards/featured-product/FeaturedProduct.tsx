import Image from 'next/image';
import useWindowWidth from '../../../../utils/useWindowWidth';
import PrimaryButton from '../../../buttons/primary-button/PrimaryButton';

export interface IFeaturedProduct {}

const FeaturedProduct: React.FC<IFeaturedProduct> = () => {
  const { screenWidth } = useWindowWidth();
  const imagePath =
    screenWidth < 600 ? 'mobile' : screenWidth < 1050 ? 'tablet' : 'desktop';

  return (
    <article className="bg-accent1 rounded-lg flex flex-col items-center text-center px-6 py-14 md:px-36 md:pt-12 md:pb-16 lg:flex-row lg:pl-28 lg:pr-24 lg:gap-36 lg:pb-0 lg:pt-24 lg:items-end lg:text-left ">
      <Image
        src={`/home/${imagePath}/image-speaker-zx9.png`}
        alt="author"
        width={screenWidth < 600 ? 170 : screenWidth < 1050 ? 190 : 756}
        height={screenWidth < 600 ? 200 : screenWidth < 1050 ? 225 : 880}
      />

      <div className="lg:mb-10 lg:self-start">
        <h3 className="font-h3 text-[36px] leading-tight text-white mt-8 md:font-h1 md:text-white md:mt-16 lg:mt-10">
          ZX9 <br /> SPEAKER
        </h3>
        <p className="font-body text-white my-6 md:mb-10">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>

        <PrimaryButton
          as="a"
          label="see product"
          ghost={false}
          className="bg-black hover:bg-[#4C4C4C]"
        />
      </div>
    </article>
  );
};

export default FeaturedProduct;
