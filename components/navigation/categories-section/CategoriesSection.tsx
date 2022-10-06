import ProductCategoryCard from '../../cards/product-category-card/ProductCategoryCard';
export interface ICategoriesSection {
  className?: string;
}

const CategoriesSection: React.FC<ICategoriesSection> = ({ className }) => {
  return (
    <section
      className={`mx-6 mt-10 mb-32 flex flex-col gap-4 items-center md:my-24 lg:mt-[120px] lg:mb-[168px] md:flex-row md:gap-3 md:mx-10 lg:gap-8 lg:mx-40 ${className}`}
    >
      <ProductCategoryCard category="headphones" />
      <ProductCategoryCard category="speakers" />
      <ProductCategoryCard category="earphones" />
    </section>
  );
};

export default CategoriesSection;
