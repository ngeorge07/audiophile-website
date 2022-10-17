import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const SummaryCard = dynamic(
  () => import('../../components/cards/summary-card/SummaryCard'),
  {
    ssr: false,
  }
);
const Checkout: NextPageWithLayout = () => {
  return (
    <article className="mx-6">
      <Suspense fallback={`Loading...`}>
        <SummaryCard />
      </Suspense>
    </article>
  );
};

export default Checkout;

Checkout.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <main>{page}</main>
    </PrimaryLayout>
  );
};
