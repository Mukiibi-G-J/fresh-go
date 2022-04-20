import React from "react";

import Product from "./Product";

function Category({ products }) {
  return (
    <div className="px-20 flex space-x-6 align-center">
      {products.map((product) => (
        <Product
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.regular_price}
          image={product.product_image[0].image}
        />
      ))}
    </div>
  );
}

export default Category;
