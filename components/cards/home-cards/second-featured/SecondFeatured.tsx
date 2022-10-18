import Image from 'next/image';
import useWindowWidth from '../../../../utils/useWindowWidth';
import PrimaryButton from '../../../buttons/primary-button/PrimaryButton';

export interface ISecondFeatured {}

const SecondFeatured: React.FC<ISecondFeatured> = () => {
  const { screenWidth } = useWindowWidth();
  const imagePath =
    screenWidth < 600 ? 'mobile' : screenWidth < 1050 ? 'tablet' : 'desktop';

  return (
    <article className="relative">
      <Image
        src={`/home/${imagePath}/image-speaker-zx7.jpg`}
        alt="The ZX7 speaker"
        width={screenWidth < 600 ? 654 : screenWidth < 1050 ? 689 : 1110}
        height={screenWidth < 600 ? 640 : screenWidth < 1050 ? 320 : 320}
        className="rounded-lg"
        sizes="(min-width: 1050px) 100vw"
      />

      <div className="absolute top-1/2 -translate-y-1/2 ml-6 md:ml-16 lg:ml-24">
        <h3 className="font-h4 mb-8">ZX7 SPEAKER</h3>
        <PrimaryButton
          as="a"
          label="see product"
          ghost={true}
          path="speakers/zx7-speaker"
        />
      </div>
    </article>
  );
};

export default SecondFeatured;
