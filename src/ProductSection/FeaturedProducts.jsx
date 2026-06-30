import React from "react";
import "./FeaturedProducts.css";
import product1 from "../assets/Images/product1.png";
import product2 from "../assets/Images/product2.png";
import product3 from "../assets/Images/product3.png";
import product4 from "../assets/Images/product4.png";
import product5 from "../assets/Images/product5.png";

const products = [
  {
    id: 1,
    name: "Gold Harmony Bracelet",
    price: "₹699",
   image: product1,
  },
  {
    id: 2,
    name: "Floral Bliss Gift Box",
    price: "₹899",
    image: product2
  },
  {
    id: 3,
    name: "Minimal Leather Wallet",
    price: "₹799",
    image: product3,
  },
  {
    id: 4,
    name: "Aesthetic Desk Organizer",
    price: "₹649",
    image: product4
  },
  {
    id: 5,
    name: "Dreamy Notebook Set",
    price: "₹599",
    image: product5
  },
];

function FeaturedProducts() {
  return (
    <section className="featured-products">

      <div className="section-title">
        <h2 className="fproducts">FEATURED PRODUCTS</h2>
        <button>VIEW ALL →</button>
      </div>


      <div className="product-container">

        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <div className="product-image">
              <img src={product.image} alt={product.name} />

              <span className="wishlist">
                ♡
              </span>

            </div>


            <h3>{product.name}</h3>
            <p>{product.price}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;
