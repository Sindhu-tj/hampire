"use client";

export default function Products() {
  const products = [
    {
      desc: "Classic vanilla ice cream with a smooth, timeless taste loved by everyone.",
      image: "/products/p1.png",
    },
    {
      desc: "Rich black currant flavour blended into creamy ice cream for a bold treat.",
      image: "/products/p2.png",
    },
    {
      desc: "Creamy vanilla family pack, perfect for sharing joyful moments.",
      image: "/products/p3.png",
    },
    {
      desc: "Rich chocolate family pack crafted for chocolate lovers.",
      image: "/products/p4.png",
    },
    {
      desc: "Delicious chocolate-coated ice cream bar for instant indulgence.",
      image: "/products/p5.png",
    },
  ];

  return (
    <>
      {/* ===================== */}
      {/* 🍨 OUR PRODUCTS */}
      {/* ===================== */}
      <section className="cups-section">
        <h2 className="cups-title">
          <span className="line"></span>
          OUR PRODUCTS
          <span className="line"></span>
        </h2>

        <p className="cups-subtitle">
          Explore our wide range of premium ice creams crafted with love and quality ingredients.
        </p>

        <div className="products-grid">
          {products.map((item, index) => (
            <div key={index} className="cup-card">
              <div className="cup-image">
                <img src={item.image} alt="Ice Cream Product" />
              </div>
              <p className="cup-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
