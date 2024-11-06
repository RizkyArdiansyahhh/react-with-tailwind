import ProductCard from "../components/Fragments/ProductCard";

const ProductsPage = () => {
  return (
    <div className="flex justify-center gap-x-6 mt-5">
      <ProductCard>
        <ProductCard.Header image="/image/product-1.jpg" />
        <ProductCard.Body title="Sepatu">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi
          iusto, quasi odit alias autem reiciendis ullam explicabo. Ipsum sint
          ad rem doloribus aliquam aspernatur quidem enim repudiandae suscipit
          labore?
        </ProductCard.Body>
        <ProductCard.Footer price="Rp. 1.000.000" />
      </ProductCard>
      <ProductCard>
        <ProductCard.Header image="/image/product-1.jpg" />
        <ProductCard.Body title="Sepatu">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi
          iusto, quasi odit alias autem reiciendis ullam explicabo. Ipsum sint
          ad rem doloribus aliquam aspernatur quidem enim repudiandae suscipit
          labore?
        </ProductCard.Body>
        <ProductCard.Footer price="Rp. 1.000.000" />
      </ProductCard>
      <ProductCard>
        <ProductCard.Header image="/image/product-1.jpg" />
        <ProductCard.Body title="Sepatu">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi
          iusto, quasi odit alias autem reiciendis ullam explicabo. Ipsum sint
          ad rem doloribus aliquam aspernatur quidem enim repudiandae suscipit
          labore?
        </ProductCard.Body>
        <ProductCard.Footer price="Rp. 1.000.000" />
      </ProductCard>
      <ProductCard>
        <ProductCard.Header image="/image/product-1.jpg" />
        <ProductCard.Body title="Sepatu">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi
          iusto, quasi odit alias autem reiciendis ullam explicabo. Ipsum sint
          ad rem doloribus aliquam aspernatur quidem enim repudiandae suscipit
          labore?
        </ProductCard.Body>
        <ProductCard.Footer price="Rp. 1.000.000" />
      </ProductCard>
    </div>
  );
};

export default ProductsPage;
