import { Fragment } from "react";
import ProductCard from "../components/Fragments/ProductCard";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

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
const email = localStorage.getItem("email");
const ProductsPage = () => {
  function handleLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }
  return (
    <Fragment>
      <div className="h-20 w-full flex items-center bg-sky-500 justify-end gap-x-5 text-white font-semibold px-6">
        {email}
        <Button onClick={handleLogout} classname="bg-black">
          Logout
        </Button>
      </div>
      <div className="flex justify-center gap-6 mt-5 flex-wrap">
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
      <Counter></Counter>
    </Fragment>
  );
};

export default ProductsPage;
