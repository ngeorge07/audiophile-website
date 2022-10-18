import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Suspense } from 'react';
import CheckoutForm from '../../components/form/checkout-form/CheckoutForm';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const SummaryCard = dynamic(
  () => import('../../components/cards/summary-card/SummaryCard'),
  {
    ssr: false,
  }
);
const Checkout: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <>
      <button
        className="ml-6 my-8 font-p opacity-80 md:ml-10 lg:mt-20 lg:ml-20"
        type="button"
        onClick={() => router.back()}
      >
        Go Back
      </button>

      <article className="mx-6 mb-24 lg:grid lg:grid-cols-[2fr,1fr] lg:gap-x-7 md:mx-10 md:mb-28 lg:mx-20 lg:mb-36">
        <CheckoutForm />

        <Suspense fallback={`Loading...`}>
          <SummaryCard />
        </Suspense>
      </article>
    </>
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
