import React, { useState } from "react";
import Button from "../../../../shared/Button/CartButton";
import "./SelectedProduct.scss";
const SelectedProduct = ({ selected_product }: any) => {
  const [stockCount, setStockCount] = useState<number>(1);

  // stock-count
  const incrementStockCount = () => {
    setStockCount(stockCount + 1);
  };

  const decrementStockCount = () => {
    if (stockCount > 1) {
      setStockCount(stockCount - 1);
    }
  };

  return (
    <div className="product-detail-modal">
      <div className="modal-image">
        <img src={selected_product.image} alt="" />
        {selected_product.discount_price && (
          <Button className="sale-btn">Sale!</Button>
        )}
      </div>
      <div className="about-section">
        <div className="about-title">{selected_product.info}</div>
        <div className="product-price">
          {selected_product.discount_price && (
            <p className="discount-price">${selected_product.price}</p>
          )}
          {selected_product.discount_price ? (
            <p className="price">${selected_product.discount_price}</p>
          ) : (
            <p className="price">${selected_product.price}</p>
          )}
        </div>
        <div className="about-this-product">
          <h2 className="about-title">About this item</h2>
          <ul className="informations">
            <li>
              This phone is unlocked and compatible with any carrier of choice
              on GSM and CDMA network.
            </li>
            <li>
              This phone is unlocked and compatible with any carrier of choice
              on GSM and CDMA network.
            </li>
            <li>
              This phone is unlocked and compatible with any carrier of choice
              on GSM and CDMA network.
            </li>
            <li>
              This phone is unlocked and compatible with any carrier of choice
              on GSM and CDMA network.
            </li>
            <li>
              This phone is unlocked and compatible with any carrier of choice
              on GSM and CDMA network.
            </li>
            <li>
              This phone is unlocked and compatible with any carrier of choice
              on GSM and CDMA network.
            </li>
          </ul>
          <div className="stocks">
            <div className="stock-count">6 in stock</div>
            <div className="inc-dec-stock-count">
              <div className="stock-btn" onClick={() => decrementStockCount()}>-</div>
              <p>{stockCount}</p>
              <div className="stock-btn" onClick={() => incrementStockCount()}>+</div>
            </div>
          </div>
          <div className="buy-amozon">
            <Button className="buy-btn">Buy On Amazon</Button>
          </div>
        </div>

        <div className="category_sku">
          <div className="content">
            <p className="name">SKU:</p>
            <p className="field">0049</p>
          </div>
          <div className="content">
            <p className="name">Categories:</p>
            <p className="field">
              <a href="">Apple products</a>, <a href="">Iphone</a>,
              <a href="">Smartphone</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
