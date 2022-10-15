import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PrimaryButton from '../../buttons/primary-button/PrimaryButton';
import IconCart from '../../SVGs/IconCart';

export interface ICheckoutModal {
  className?: string;
}

const CheckoutModal: React.FC<ICheckoutModal> = ({ className }) => {
  const [productCount, setProductCount] = useState(1);
  const [openCheckoutModal, setOpenCheckoutModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dynamicRoute = useRouter().asPath;

  useEffect(() => {
    setOpenCheckoutModal(false);
    setIsMounted(false);
    document.body.style.overflow = 'auto';
  }, [dynamicRoute]);

  return (
    <>
      <button
        onClick={() => {
          !openCheckoutModal
            ? setOpenCheckoutModal(true)
            : setTimeout(() => {
                setOpenCheckoutModal(false);
              }, 300);
          setIsMounted((prev) => !prev);

          setTimeout(() => {
            openCheckoutModal
              ? (document.body.style.overflow = 'auto')
              : (document.body.style.overflow = 'hidden');
          }, 350);
        }}
      >
        <IconCart />
      </button>

      {openCheckoutModal && (
        <div className="-z-10 fixed left-0 bottom-0 w-full h-full bg-black/[.40] overflow-y-auto">
          <article
            className={`bg-white right-[1.5em] left-[1.5em] py-8 px-7 absolute rounded-lg mt-[120px] my-auto md:right-0 md:left-auto  md:w-96 md:mr-10 lg:mr-40 ${
              isMounted ? 'animate-fadeIn' : 'animate-fadeOut'
            } ${className}`}
          >
            <section className="flex justify-between">
              <h3 className="font-h6">Cart (3)</h3>

              <button className="font-body opacity-50">Remove all</button>
            </section>

            <section
              className="flex my-8 items-center"
              itemScope
              itemType="https://schema.org/Product"
            >
              <Image
                src={`/cart/image-xx99-mark-two-headphones.jpg`}
                alt="author"
                width={70}
                height={70}
                className="rounded-lg"
                itemProp="image"
              />

              <div className="flex flex-col ml-4">
                <h3 className="font-body font-bold" itemProp="name">
                  XX99 MK II
                </h3>

                <div
                  className="font-body font-bold opacity-50"
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <span itemProp="price">$ 2,999</span>
                  <meta itemProp="priceCurrency" content="USD" />
                </div>
              </div>

              <div className="px-2 bg-primary flex justify-between items-center ml-auto w-24 h-8">
                <button
                  disabled={productCount < 2 && true}
                  className={`${
                    productCount > 1 ? 'hover:text-accent1' : 'opacity-50'
                  } p-1`}
                  onClick={() =>
                    productCount > 0 && setProductCount((prev) => prev - 1)
                  }
                >
                  -
                </button>
                <span>{productCount}</span>
                <button
                  onClick={() => setProductCount((prev) => prev + 1)}
                  className="p-1 hover:text-accent1"
                >
                  +
                </button>
              </div>
            </section>

            <section
              className="flex justify-between mb-6"
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <h3 className="font-body uppercase opacity-50" itemProp="name">
                Total
              </h3>
              <span
                className="font-body text-[18px] font-bold"
                itemProp="price"
              >
                $ 2,999
              </span>
              <meta itemProp="priceCurrency" content="USD" />
            </section>

            <PrimaryButton
              as="a"
              ghost={false}
              path="#"
              label="checkout"
              className="bg-accent1 w-full text-center"
            />
          </article>
        </div>
      )}
    </>
  );
};

export default CheckoutModal;
