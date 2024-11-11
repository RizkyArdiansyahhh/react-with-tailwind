import { Fragment, useEffect, useRef, useState } from "react";
import ProductCard from "../components/Fragments/ProductCard";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/products.services";

const email = localStorage.getItem("email");
const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      if (storedCart) {
        setCart(storedCart);
      }
    } catch (error) {
      console.error("Error loading cart data:", error);
      setCart([]);
    }
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  });

  useEffect(() => {
    const sum =
      products.length > 0 &&
      cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
    setTotalPrice(sum);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, products]);

  function handleAddToCart(id) {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: id,
          qty: 1,
        },
      ]);
    }
    // jika di state cart udah ada yang id nya sama maka ngga usah
  }
  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "flex";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  // const cartRef = useRef([
  //   {
  //     id: 1,
  //     qty: 1,
  //   },
  // ]);

  // function handleAddToChartRef(id) {
  //   cartRef.current([
  //     ...cartRef,
  //     {
  //       id: id,
  //       qty: 1,
  //     },
  //   ]);
  // }

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
      <div className="flex justify-center gap-6 mt-5 p-5 ">
        <div className="w-3/5 flex gap-5 flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id}>
                <ProductCard.Header image={product.image} />
                <ProductCard.Body title={product.title}>
                  {product.description}
                </ProductCard.Body>
                <ProductCard.Footer
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                  price={product.price}
                />
              </ProductCard>
            ))}
        </div>
        <div className="w-2/5 ">
          <h1 className="text-3xl font-bold">Cart</h1>
          <div className="flex flex-col gap-y-3">
            {products.length > 0 &&
              cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <div
                    key={item.id}
                    className="border border-slate-300 rounded-lg p-3 flex justify-between"
                  >
                    <div className="h-1/4 w-1/4">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="text-xl font-bold flex items-center">
                      <p>{product.title}</p>
                    </div>
                    <div className="flex flex-col justify-center gap-y-4 items-center">
                      <span className="text-lg font-semibold">
                        {" "}
                        qty : {item.qty}
                      </span>
                      <span className="text-lg text-slate-600">
                        {(product.price * item.qty).toLocaleString("es-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
          <div ref={totalPriceRef} className="flex justify-between mt-2">
            <span className="text-lg font-semibold">Total Price</span>
            <span className="text-lg font-semibold">
              {totalPrice.toLocaleString("es-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
