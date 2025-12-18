import React from "react";
import "./Products.scss";
import {Fade} from "react-reveal";

const products = [
  {
    name: "Thiệp Cưới Hạt Giống",
    description: "Thiệp cưới với hạt hoa cẩm chướng, gửi gắm lời chúc bền lâu",
    image: require("../../assets/images/product1.jpg")
  },
  {
    name: "Thiệp Sinh Nhật",
    description: "Thiệp sinh nhật với hạt hoa hướng dương, mang lại niềm vui",
    image: require("../../assets/images/product2.jpg")
  },
  {
    name: "Thiệp Tri Ân",
    description: "Thiệp cảm ơn với hạt cỏ xanh, tôn vinh tình bạn",
    image: require("../../assets/images/product3.jpg")
  }
];

export default function Products() {
  return (
    <div className="products-main" id="products">
      <div className="products-header">
        <Fade bottom duration={1000} distance="20px">
          <h1 className="products-header-text">Sản Phẩm Của Chúng Tôi 🌱</h1>
        </Fade>
      </div>
      <div className="products-body">
        {products.map((product, index) => (
          <Fade bottom duration={1000} distance="20px" key={index}>
            <div className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
