import products from "../Products/products";

const ProductList = () => {
  return (
    <ul>
      {products
        .filter((product) => product.inStock)
        .map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}$
          </li>
        ))}
    </ul>
  );
};

export default ProductList;

