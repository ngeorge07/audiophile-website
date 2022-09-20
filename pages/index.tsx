import type { NextPage } from 'next';
import SecondaryButton from '../components/buttons/secondary-button/SecondaryButton';

const Home: NextPage = () => {
  return (
    <>
      <p className="font-overline">Morbi interdum</p>
      <p className="font-subtitle">Morbi interdum</p>
      <p className="font-body">Morbi interdum</p>

      <SecondaryButton label="dadaad" />
    </>
  );
};

export default Home;
