import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../features/cart-logic/cartLogicSlice';
import PrimaryButton from '../../buttons/primary-button/PrimaryButton';
import IconOrderConfirmation from '../../SVGs/IconOrderConfirmation';
import InputField from '../input-filed/InputField';

export interface ICheckoutForm {}

const CheckoutForm: React.FC<ICheckoutForm> = () => {
  const [selected, setSelected] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmit(true);
    dispatch(clearCart());
    window.scrollTo(0, 0);
  };

  return (
    <>
      <form
        action="/headphones"
        method="post"
        onSubmit={handleSubmit}
        className="p-6 md:py-7 lg:py-11 bg-white rounded-lg"
        id="checkout-form"
      >
        <h2 className="font-h4 md:font-h2">Checkout</h2>

        <section className="mt-[53px]">
          <h3 className="font-subtitle mb-4">Billing details</h3>

          <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
            <InputField
              label="Full Name"
              htmlFor="fullName"
              type="text"
              placeholder="George Nicolae"
              pattern="^[_A-z]*((-|\s)*[_A-z])*\s*$"
            />

            <InputField
              label="Email Address"
              htmlFor="email"
              type="email"
              placeholder="example@email.com"
              pattern='(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
            />

            <InputField
              label="Phone Number"
              htmlFor="phoneNr"
              type="tel"
              placeholder="+45 12345678"
              pattern="^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$"
            />
          </div>
        </section>

        <section className="mt-[53px]">
          <h3 className="font-subtitle mb-4">Shipping information</h3>

          <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
            <InputField
              label="Address"
              htmlFor="address"
              type="text"
              placeholder="1137 Williams Avenue"
              className="md:col-span-2"
            />

            <InputField
              label="ZIP Code"
              htmlFor="zip"
              type="text"
              placeholder="10001"
              pattern="^\d{0,6}$"
            />

            <InputField
              label="City"
              htmlFor="city"
              type="text"
              placeholder="New York"
            />

            <InputField
              label="Country"
              htmlFor="country"
              type="text"
              placeholder="United States"
              pattern="^([a-zA-Z\s\-]+)$"
            />
          </div>
        </section>

        <section className="mt-[53px]">
          <h3 className="font-subtitle mb-4">Payment details</h3>

          <fieldset className="flex flex-col gap-6 md:grid md:grid-cols-2">
            <legend className="contents mb-2 font-body text-[14px] font-bold">
              Payment Method
            </legend>
            <ul className="flex flex-col gap-4">
              <li>
                <label
                  htmlFor="card"
                  className={`${
                    selected ? 'border-secondary' : 'border-accent1'
                  } hover:cursor-pointer border rounded-lg flex gap-3 pl-3 py-4 w-full font-body text-[14px] font-bold`}
                >
                  <input
                    onChange={() => setSelected((prev) => !prev)}
                    checked={!selected}
                    className="w-5 accent-accent1 hover:cursor-pointer"
                    type="radio"
                    id="card"
                    value="card"
                    name="paymentMethod"
                    required
                  />
                  Credit Card
                </label>
              </li>

              <li>
                <label
                  htmlFor="cash"
                  className={`${
                    selected ? 'border-accent1' : 'border-secondary'
                  } hover:cursor-pointer border rounded-lg flex gap-3 pl-3 py-4 w-full font-body text-[14px] font-bold`}
                >
                  <input
                    onChange={() => setSelected((prev) => !prev)}
                    checked={selected}
                    className="w-5 accent-accent1 hover:cursor-pointer"
                    type="radio"
                    id="cash"
                    value="cash"
                    name="paymentMethod"
                    required
                  />
                  Cash on Delivery
                </label>
              </li>
            </ul>
          </fieldset>
        </section>
      </form>

      {isSubmit && (
        <div className="z-50 fixed left-0 top-0 w-full h-full bg-black/[.40] overflow-y-auto">
          <section className="mt-32 flex flex-col mx-6 px-6 py-8 md:mx-auto md:max-w-md bg-white rounded-lg">
            <IconOrderConfirmation />
            <h2 className="font-h5 mt-6 mb-4 md:font-h3">
              Thank you for your order
            </h2>
            <p className="font-body mb-4 opacity-80">
              You will receive an email confirmation shortly. (not really)
            </p>

            <PrimaryButton
              as="a"
              ghost={false}
              label={'back to home'}
              path="/"
              className="bg-accent1 text-center w-full"
            />
          </section>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
