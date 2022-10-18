import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import numberFormatting from '../../../utils/numberFormatting';
import CartItemCard from '../cart-item-card/CartItemCard';

export interface ISummaryCard {}

const SummaryCard: React.FC<ISummaryCard> = () => {
  const { cartItems, total } = useSelector(
    (state: RootState) => state.cartLogic
  );

  const vat = (total * 20) / 100;

  return (
    <article className="p-6 bg-white mb-28 rounded-lg lg:h-fit">
      <h3 className="font-h6">Summary</h3>

      {cartItems.map((product) => (
        <CartItemCard key={product.id} item={product} isSummary={true} />
      ))}

      <section
        className="flex flex-col mb-8 gap-2"
        itemScope
        itemType="https://schema.org/Invoice"
      >
        <div className="flex justify-between">
          <h4 className="font-body uppercase opacity-50" itemProp="name">
            Total
          </h4>
          <span className="font-body text-[18px] font-bold" itemProp="price">
            $ {numberFormatting(total)}
          </span>
          <meta itemProp="priceCurrency" content="USD" />
        </div>

        <div
          className="flex justify-between"
          itemProp="priceSpecification"
          itemScope
          itemType="https://schema.org/DeliveryChargeSpecification"
        >
          <meta
            itemProp="appliesToDeliveryMethod"
            data-link="http://purl.org/goodrelations/v1#DHL"
          ></meta>
          <h4 className="font-body uppercase opacity-50" itemProp="name">
            Shipping
          </h4>
          <span className="font-body text-[18px] font-bold" itemProp="price">
            $ 50
          </span>
          <meta itemProp="priceCurrency" content="USD" />
        </div>

        <div className="flex justify-between">
          <h4 className="font-body uppercase opacity-50" itemProp="name">
            VAT (included)
          </h4>
          <span className="font-body text-[18px] font-bold" itemProp="price">
            $ {numberFormatting(vat)}
          </span>
          <meta itemProp="priceCurrency" content="USD" />
        </div>

        <div
          className="flex justify-between mt-4"
          itemProp="totalPaymentDue"
          itemScope
          itemType="https://schema.org/PriceSpecification"
        >
          <h4 className="font-body uppercase opacity-50" itemProp="name">
            Grand total
          </h4>
          <span className="font-body text-[18px] font-bold" itemProp="price">
            $ {numberFormatting(total + vat)}
          </span>
          <meta itemProp="priceCurrency" content="USD" />
        </div>
      </section>

      <button
        form="checkout-form"
        className="navigation-button py-4 px-8
         bg-accent1 text-white hover:bg-accent2 w-full"
      >
        Continue & pay
      </button>
    </article>
  );
};

export default SummaryCard;
