import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import CartItemCard from '../cart-item-card/CartItemCard';

export interface ISummaryCard {}

const SummaryCard: React.FC<ISummaryCard> = () => {
  const { cartItems, total } = useSelector(
    (state: RootState) => state.cartLogic
  );

  const vat = Number(((total * 20) / 100).toFixed(2));

  return (
    <article className="p-6 bg-white mb-28 rounded-lg">
      <h3 className="font-h6">Summary</h3>

      {cartItems.map((product) => (
        <CartItemCard key={product.id} item={product} isSummary={true} />
      ))}

      <section
        className="flex flex-col mb-6"
        itemProp="offers"
        itemScope
        itemType="https://schema.org/PriceSpecification"
      >
        <div className="flex justify-between">
          <h4 className="font-body uppercase opacity-50" itemProp="name">
            Total
          </h4>
          <span className="font-body text-[18px] font-bold" itemProp="price">
            $ {total}
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
            $ {vat}
          </span>
          <meta itemProp="priceCurrency" content="USD" />
        </div>

        <div
          className="flex justify-between"
          itemProp="totalPaymentDue"
          itemScope
          itemType="https://schema.org/PriceSpecification"
        >
          <h4 className="font-body uppercase opacity-50" itemProp="name">
            Grand total
          </h4>
          <span className="font-body text-[18px] font-bold" itemProp="price">
            $ {total + vat}
          </span>
          <meta itemProp="priceCurrency" content="USD" />
        </div>
      </section>
    </article>
  );
};

export default SummaryCard;
