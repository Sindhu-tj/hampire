import Image from "next/image";
import Link from "next/link";
import "./about.css";

export default function About() {
  return (
    <main className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About Us</h1>
      </section>

      {/* TASTE SECTION */}
      <section className="taste-section container">
        <div className="taste-grid">

          {/* LEFT IMAGE */}
          <div className="taste-image">
            <Image
              src="/about/icecream.jpg"
              alt="Girl enjoying ice cream"
              width={650}
              height={650}
              className="rounded-img"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="taste-content">
            <h2>A Taste Of Pure Joy</h2>

            <p>
              Ready for your new favorite destination for creamy, cool and delicious ice cream?
              Crafted with pure milk and 100% vegetarian ingredients, Magneta is a joyous and
              festive treat for everyone.
            </p>

            <p>
              Discover the magic of classic and decadent frozen desserts with Magneta.
            </p>

            {/* ✅ LINKED BUTTON */}
            <Link href="/products">
              <button className="products-btn">
                Our Products →
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">Meet the experts behind our Vision</p>

        <div className="team-grid container">
          {[
            { name: "Shashikant Sidnal", role: "Managing Director", img: "/team1.jpg" },
            { name: "Indrajeet Sidnal", role: "Director", img: "/team2.jpg" },
            { name: "Digvijay Sidnal", role: "Director", img: "/team3.jpg" },
            { name: "Digvijay Sidnal", role: "Director", img: "/team3.jpg" },
            { name: "Digvijay Sidnal", role: "Director", img: "/team3.jpg" },
          ].map((member, i) => (
            <div className="team-card" key={i}>
              <Image src={member.img} alt={member.name} width={280} height={320} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="our-process">
        <h2 className="process-title">Our Process</h2>
        <p className="process-subtitle">Real ice cream for real people</p>

        <div className="process-wrapper container">

          <div className="process-line"></div>

          <div className="process-item left">
            <Image src="/about/process-1.jpg" alt="Purity & Hygiene" width={420} height={260} />
          </div>
          <div className="process-item right">
            <h3>Purity our Promise, Hygiene our Priority</h3>
            <p>
              We believe purity and hygiene are the cornerstone of a truly
              exceptional product.
            </p>
          </div>

          <div className="process-item left text">
            <h3>Satisfaction Assured, Quality Guaranteed</h3>
            <p>
              Dedicated to providing exceptional frozen dessert experiences.
            </p>
          </div>
          <div className="process-item right">
            <Image src="/about/process-2.jpg" alt="Quality" width={420} height={260} />
          </div>

          <div className="process-item left">
            <Image src="/about/milk.jpg" alt="Pure Milk" width={420} height={260} />
          </div>
          <div className="process-item right">
            <h3>Pure Milk, for a Nourishing Delight</h3>
            <p>
              Made with pure milk, savour the nourishing wholesomeness.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import "./about.css";

export default function About() {
  return (
    <main className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About Us</h1>
      </section>

      {/* TASTE SECTION */}
      <section className="taste-section container">
        <div className="taste-grid">

          {/* LEFT IMAGE */}
          <div className="taste-image">
            <Image
              src="/about/icecream.jpg"
              alt="Girl enjoying ice cream"
              width={650}
              height={650}
              className="rounded-img"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="taste-content">
            <h2>A Taste Of Pure Joy</h2>

            <p>
              Ready for your new favorite destination for creamy, cool and delicious ice cream?
              Crafted with pure milk and 100% vegetarian ingredients, Magneta is a joyous and
              festive treat for everyone.
            </p>

            <p>
              Discover the magic of classic and decadent frozen desserts with Magneta.
            </p>

            {/* ✅ LINKED BUTTON */}
            <Link href="/products">
              <button className="products-btn">
                Our Products →
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">Meet the experts behind our Vision</p>

        <div className="team-grid container">
          {[
            { name: "Shashikant Sidnal", role: "Managing Director", img: "/team1.jpg" },
            { name: "Indrajeet Sidnal", role: "Director", img: "/team2.jpg" },
            { name: "Digvijay Sidnal", role: "Director", img: "/team3.jpg" },
            { name: "Digvijay Sidnal", role: "Director", img: "/team3.jpg" },
            { name: "Digvijay Sidnal", role: "Director", img: "/team3.jpg" },
          ].map((member, i) => (
            <div className="team-card" key={i}>
              <Image src={member.img} alt={member.name} width={280} height={320} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="our-process">
        <h2 className="process-title">Our Process</h2>
        <p className="process-subtitle">Real ice cream for real people</p>

        <div className="process-wrapper container">

          <div className="process-line"></div>

          <div className="process-item left">
            <Image src="/about/process-1.jpg" alt="Purity & Hygiene" width={420} height={260} />
          </div>
          <div className="process-item right">
            <h3>Purity our Promise, Hygiene our Priority</h3>
            <p>
              We believe purity and hygiene are the cornerstone of a truly
              exceptional product.
            </p>
          </div>

          <div className="process-item left text">
            <h3>Satisfaction Assured, Quality Guaranteed</h3>
            <p>
              Dedicated to providing exceptional frozen dessert experiences.
            </p>
          </div>
          <div className="process-item right">
            <Image src="/about/process-2.jpg" alt="Quality" width={420} height={260} />
          </div>

          <div className="process-item left">
            <Image src="/about/milk.jpg" alt="Pure Milk" width={420} height={260} />
          </div>
          <div className="process-item right">
            <h3>Pure Milk, for a Nourishing Delight</h3>
            <p>
              Made with pure milk, savour the nourishing wholesomeness.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

