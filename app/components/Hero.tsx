<<<<<<< HEAD
"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">

      {/* HERO CONTENT */}
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-text">
          <h1>
            Hampire Ice Cream : <br />
            <span>Pure Delight</span>
          </h1>

          <p>
            Creamy delights crafted with milk and no added oils.
            <br />
            Experience the pure, natural taste in every bite.
          </p>

          <div className="hero-buttons">
            <Link href="/products" className="btn primary">
              Our Products →
            </Link>

            <Link href="/contact" className="btn outline">
              📞 Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <div className="image-circle">
            <img src="/hero.png" alt="Ice Cream Girl" />
          </div>
        </div>
      </div>

      {/* 🔵 BOTTOM WAVE ONLY */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,40 C240,0 480,80 720,80 960,80 1200,0 1440,40 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
      

    </section>
  );
}
=======
"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">

      {/* HERO CONTENT */}
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-text">
          <h1>
            Hampire Ice Cream : <br />
            <span>Pure Delight</span>
          </h1>

          <p>
            Creamy delights crafted with milk and no added oils.
            <br />
            Experience the pure, natural taste in every bite.
          </p>

          <div className="hero-buttons">
            <Link href="/products" className="btn primary">
              Our Products →
            </Link>

            <Link href="/contact" className="btn outline">
              📞 Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <div className="image-circle">
            <img src="/hero.png" alt="Ice Cream Girl" />
          </div>
        </div>
      </div>

      {/* 🔵 BOTTOM WAVE ONLY */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,40 C240,0 480,80 720,80 960,80 1200,0 1440,40 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
      

    </section>
  );
}
>>>>>>> b84fc68743fcef89a51b8023a678670672e02ce5
