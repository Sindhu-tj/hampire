"use client";

export default function Products() {
  const cups = [
    {
      desc: "Fresh strawberry flavour blended into creamy milk ice cream for a refreshing treat.",
      image: "/cups/1.png",
    },
    {
      desc: "Made with real mango pulp for a rich, tropical and creamy experience.",
      image: "/cups/2.png",
    },
    {
      desc: "Smooth pista ice cream crafted with nutty richness and pure milk.",
      image: "/cups/3.png",
    },
    {
      desc: "Classic vanilla ice cream with a smooth, timeless taste loved by everyone.",
      image: "/cups/4.png",
    },
  ];

  const cones = [
    {
      desc: "Rich black currant flavour blended into creamy ice cream for a bold treat.",
      image: "/cones/1.png",
    },
    {
      desc: "Deep chocolate indulgence crafted for true chocolate lovers.",
      image: "/cones/2.png",
    },
    {
      desc: "Sweet strawberry delight with a refreshing creamy twist.",
      image: "/cones/3.png",
    },
    {
      desc: "Golden butterscotch flavour with crunchy caramel goodness.",
      image: "/cones/4.png",
    },
  ];

  const familyPacks = [
    { desc: "Creamy vanilla family pack, perfect for sharing joyful moments.", image: "/family pack/f1.png" },
    { desc: "Rich chocolate family pack crafted for chocolate lovers.", image: "/family pack/f2.png" },
    { desc: "Refreshing strawberry family pack with fruity delight.", image: "/family pack/f3.png" },
    { desc: "Mango family pack made with real mango pulp for tropical indulgence.", image: "/family pack/f5.png" },
    { desc: "Mango family pack made with real mango pulp for tropical indulgence.", image: "/family pack/f6.png" },
    { desc: "Mango family pack made with real mango pulp for tropical indulgence.", image: "/family pack/f7.png" },
  ];

  return (
    <>
{/* ===================== */}
{/* HERO SECTION */}
{/* ===================== */}
<section
  className="page-hero"
  style={{
    backgroundImage: "url('/images/products-hero.jpg')",
  }}
>
  <div className="page-hero-overlay">
    <h1>Our Products</h1>
  </div>
</section>


      {/* ===================== */}
      {/* 🍨 CUPS SECTION */}
      {/* ===================== */}
      <section className="cups-section">
        <h2 className="cups-title">
          <span className="line"></span>
          CUPS
          <span className="line"></span>
        </h2>

        <p className="cups-subtitle">
          Indulge in our delicious and creamy ice cream cups, available in four delightful flavors.
        </p>

        <div className="cups-grid">
          {cups.map((cup, index) => (
            <div key={index} className="cup-card">
              <div className="cup-image">
                <img src={cup.image} alt="Ice Cream Cup" />
              </div>
              <p className="cup-desc">{cup.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== */}
      {/* 🍦 CONES SECTION */}
      {/* ===================== */}
      <section className="cups-section">
        <h2 className="cups-title">
          <span className="line"></span>
          CONES
          <span className="line"></span>
        </h2>

        <p className="cups-subtitle">
          Indulge in our delicious and creamy ice cream cones, available in four delightful flavors.
        </p>

        <div className="cups-grid">
          {cones.map((cone, index) => (
            <div key={index} className="cup-card">
              <div className="cup-image">
                <img src={cone.image} alt="Ice Cream Cone" />
              </div>
              <p className="cup-desc">{cone.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== */}
      {/* 🍧 FAMILY PACK SECTION */}
      {/* ===================== */}
      <section className="cups-section">
        <h2 className="cups-title">
          <span className="line"></span>
          FAMILY PACKS
          <span className="line"></span>
        </h2>

        <p className="cups-subtitle">
          Big tubs of happiness, perfect for families and celebrations.
        </p>

        <div className="cups-grid">
          {familyPacks.map((pack, index) => (
            <div key={index} className="cup-card">
              <div className="cup-image">
                <img src={pack.image} alt="Family Pack Ice Cream" />
              </div>
              <p className="cup-desc">{pack.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
