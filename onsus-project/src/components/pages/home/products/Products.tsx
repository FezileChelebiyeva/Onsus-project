import React, { useEffect, useState } from "react";
import "./Products.scss";
import categories_btns from "../../../../fake-api/btns";
import categories_products from "../../../../fake-api/products";
import Button from "../../../shared/Button/CartButton";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { Product } from "../../../../interfaces/site.interface";
import Spinner from "../../../shared/Spinner/Spinner";
import SelectedProduct from "./Selected-Products/SelectedProduct";

const Products = () => {
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [wishlist, setWishlist] = useState<boolean | false>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (categories_products?.length > 0) {
      setCategoryId(categories_products[0].id);
    }
  }, [categories_products]);

  // change category
  const categoryChange = (id: number) => {
    setCategoryId(id);
  };

  // wishlist
  const addToWishlist = () => {
    setWishlist(!wishlist);
  };

  // detail modal
  const showModal = (product: Product) => {
    setSelectedProduct(product);
    setLoading(true);

    setTimeout(() => {
      setIsModalVisible(true);
      setLoading(false);
    }, 500);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedProduct(null);
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
                element.id == categoryId &&
                element.category.map((el) => {
                  return (
                    <div className="categories-products">
                      <div className="product-card">
                        <div className="product-info">
                          <div className="product-picture">
                            <img src={el.image} alt="" />
                          </div>
                          <div className="product-details">
                            <div className="product-categories">{el.title}</div>
                            <div className="product-model">
                              <Link to={""}>{el.info}</Link>
                            </div>
                            <div className="product-price">
                              {el.discount_price ? (
                                <p className="price">
                                  {el.discount_price}
                                </p>
                              ) : (
                                <p className="price">{el.price}</p>
                              )}
                              {el.discount_price && (
                                <p className="discount-price">
                                  {el.price}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="three-functional-btn">
                          <div
                            onClick={() => showModal(el)}
                            className="detail"
                            style={{ cursor: "pointer", position: "relative" }}
                          >
                            {loading ? (
                              <Spinner />
                            ) : (
                              <i
                                className="fa-regular fa-eye"
                                style={{ fontSize: "20px" }}
                              ></i>
                            )}
                          </div>
                          <div
                            onClick={() => addToWishlist()}
                            className="detail"
                          >
                            {wishlist ? (
                              <i className="fa-solid fa-heart"></i>
                            ) : (
                              <i className="fa-regular fa-heart"></i>
                            )}
                          </div>
                          <div className="detail">
                            <i className="fa-solid fa-arrow-right-arrow-left"></i>
                          </div>
                        </div>
                        <div className="more-product-info">
                          <div className="more-info">
                            {[
                              { label: "Brand", value: el.brand },
                              { label: "Model Name", value: el.model },
                              { label: "Screen Size", value: el.screen_size },
                              { label: "Resolution", value: el.resolution },
                              { label: "Refresh Rate", value: el.refresh_rate },
                              { label: "Operating System", value: el.system },
                              { label: "Color", value: el.color },
                              { label: "Memory", value: el.memory },
                            ].map(
                              (item, index) =>
                                item.value && (
                                  <div className="info" key={index}>
                                    <p>{item.label}</p>
                                    <p>{item.value}</p>
                                  </div>
                                )
                            )}
                          </div>
                          {el.delivery_time && (
                            <div className="time-delivery">
                              <i className="fa-solid fa-truck"></i>

                              <p className="time">
                                {el.delivery_time} day delivery
                              </p>
                            </div>
                          )}
                          <div className="add-to-cart-btn">
                            <Button className="cart-btn" type="button">
                              Ad to cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              );
            })}
          </div>
          <Modal
            open={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            width={"80%"}
            centered
          >
            {selectedProduct && (
              <SelectedProduct selected_product={selectedProduct} />
            )}
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Products;
