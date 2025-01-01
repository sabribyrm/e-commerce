import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

const HomePage = () => {
  console.log(sampleData);
  return (
    <>
      <ProductList data={sampleData.products} title="Yeni Ürünler" limit={4} />
    </>
  );
};

export default HomePage;
