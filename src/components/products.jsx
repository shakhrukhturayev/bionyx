import { styles } from "../util/style"; // 
import ProductCard from "../components/product-card"; 
import { useTranslation } from "react-i18next";
import '../i18n'



const Products = () => {
  const { t } = useTranslation();

  const products = t('products.products', { returnObjects: true });
  //console.log(products);

  return (
    <div>
      <h1
        className={`${styles.container} ${styles.PaddingX}  ${styles.DisplayStart}  font-bold sm:text-[50px] text-[43px] text-darkGreen mt-10 text-center `}
      >
        {t('ourproducts')}
      </h1>
      <div
        id="product"
        className={`${styles.DisplayStart} flex-1 ${styles.PaddingX} flex-wrap items-center`}
      >
        {products.map((product, idx) => (
          <ProductCard key={product.id} {...product} idx={idx} /> 
        ))}
      </div>
    </div>
  );
};

export default Products;
