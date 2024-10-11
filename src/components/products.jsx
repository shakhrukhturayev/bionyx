import { ProductCardItems } from "../util/constants"; // to'g'ri nomi
import { styles } from "../util/style"; // styles faylingizni import qilish
import ProductCard from "../components/product-card"; // ProductCard to'g'ri import qilindi

const Products = () => {
  return (
    <div>
      <h1
        className={`${styles.container} ${styles.PaddingX}  ${styles.DisplayStart}  font-bold sm:text-[50px] text-[43px] text-darkGreen mt-10 text-center `}
      >
        Bizning maxsulotlar
      </h1>
      <div
        id="product"
        className={`${styles.DisplayStart} flex-1 ${styles.PaddingX} flex-wrap items-center`}
      >
      
        {ProductCardItems.map((product, idx) => (
          <ProductCard key={product.id} {...product} idx={idx} /> // To'g'ri argumentlar
        ))}
      </div>
    </div>
  );
};

export default Products;
