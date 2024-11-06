import ProductCard from "../components/Fragments/ProductCard";

const products = [
  {
    id: 1,
    title: "Sepatu",
    image: "/image/product-1.jpg",
    description: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda veritatis, fugiat dolores vel aperiam et eum odio dicta! Iste hic sit modi amet magnam molestiae perspiciatis eaque cumque nam dolorum.`,
    price: "Rp. 1.000.000",
  },
  {
    id: 2,
    title: "Sepatu",
    image: "/image/product-1.jpg",
    description: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda veritatis, fugiat dolores vel aperiam et eum odio dicta! Iste hic sit modi amet magnam molestiae perspiciatis eaque cumque nam dolorum.`,
    price: "Rp. 1.000.000",
  },
  {
    id: 3,
    title: "Sepatu",
    image: "/image/product-1.jpg",
    description: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda veritatis, fugiat dolores vel aperiam et eum odio dicta! Iste hic sit modi amet magnam molestiae perspiciatis eaque cumque nam dolorum.`,
    price: "Rp. 1.000.000",
  },
];
const ProductsPage = () => {
  return (
    <div className="flex justify-center gap-x-6 mt-5">
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductCard.Header image={product.image} />
          <ProductCard.Body title={product.title}>
            {product.description}
          </ProductCard.Body>
          <ProductCard.Footer price={product.price} />
        </ProductCard>
      ))}
    </div>
  );
};

export default ProductsPage;
