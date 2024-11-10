import React, { useEffect, useState } from "react";
import "./Products.scss";
import categories_btns from "../../../../fake-api/btns";
import categories_products from "../../../../fake-api/products";
const Products = () => {
  const [categoryId, setCategoryId] = useState<number | null>(null);


  useEffect(() => {
    if (categories_products?.length > 0) {
      setCategoryId(categories_products[0].id);
    }
  }, [categories_products]);


  const categoryChange = (id: number) => {
    setCategoryId(id);
  };
  return (
    <section id="products">
      <div className="container">
        <div className="products">
          <div className="categories-btns">
            {categories_btns.map((element) => {
              return (
                <button
                  key={element.id}
                  className={`category-btn ${
                    element.id === categoryId ? "active-btn" : ""
                  }`}
                  onClick={() => categoryChange(element.id)}
                >
                  {element.name}
                </button>
              );
            })}
          </div>
          <div className="product-cards">
            {categories_products.map((element) => {
              return (
                element.id == categoryId && (
                  <div key={element.id} className="categories-product">
                    {element.name}
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
