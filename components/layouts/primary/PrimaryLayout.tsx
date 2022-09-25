import Head from 'next/head';

import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>

      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PrimaryLayout;
