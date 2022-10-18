import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense } from 'react';
import Footer from '../../navigation/footer/Footer';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const DynamicHeader = dynamic(() => import('../../navigation/header/Header'), {
  ssr: false,
});

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Audiophille Website</title>
      </Head>

      <Suspense fallback={`Loading...`}>
        <DynamicHeader />
      </Suspense>
      {children}
      <Footer />
    </>
  );
};

export default PrimaryLayout;
