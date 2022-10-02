import ProductCategoryCard from '../../cards/product-category-card/ProductCategoryCard';
export interface ICategoriesSection {}

const CategoriesSection: React.FC<ICategoriesSection> = () => {
  return (
    <section className="mx-6 flex flex-col gap-4 items-center md:flex-row md:gap-3 md:mx-10 lg:gap-8 lg:mx-40">
      <ProductCategoryCard category="headphones" />
      <ProductCategoryCard category="speakers" />
      <ProductCategoryCard category="earphones" />
    </section>
  );
};

export default CategoriesSection;
