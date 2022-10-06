import Image from 'next/image';
import useWindowWidth from '../../../../utils/useWindowWidth';
import PrimaryButton from '../../../buttons/primary-button/PrimaryButton';

export interface IThirdFeatured {}

const ThirdFeatured: React.FC<IThirdFeatured> = () => {
  const { screenWidth } = useWindowWidth();
  const imagePath =
    screenWidth < 600 ? 'mobile' : screenWidth < 1050 ? 'tablet' : 'desktop';

  return (
    <article className="flex flex-col gap-6 md:flex-row md:gap-3 lg:gap-8">
      <div className="md:w-1/2 relative">
        <Image
          src={`/home/${imagePath}/image-earphones-yx1.jpg`}
          alt="author"
          width={screenWidth < 600 ? 654 : screenWidth < 1050 ? 678 : 540}
          height={screenWidth < 600 ? 400 : screenWidth < 1050 ? 640 : 320}
          layout="responsive"
          className="rounded-lg"
        />
      </div>

      <div className="bg-primary rounded-lg md:w-1/2 flex">
        <div className="self-center py-10 pr-5 ml-6 md:ml-10 lg:ml-24">
          <h3 className="font-h4 mb-8">YX1 EARPHONES</h3>
          <PrimaryButton as="a" label="see product" ghost={true} />
        </div>
      </div>
    </article>
  );
};

export default ThirdFeatured;
