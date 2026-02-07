"use client";

import Link from "next/link";

export default function Story() {
  return (
    <section className="story">
      {/* TOP WAVE */}
      <div className="story-wave-top"></div>

      <div className="story-content">
        <h2>Our Story</h2>
        <h3>A Brand For Everyone</h3>

        <p>
          Hampire Ice Cream is crafted with passion, purity and premium milk.
          Our goal is to deliver delightful taste experiences for everyone,
          every single day.
        </p>

        {/* Learn More → About Page */}
        <Link href="/about" className="story-btn">
          Learn More →
        </Link>
      </div>

      <div className="story-image">
        <img src="/story.png" alt="Our Story" />
      </div>
    </section>
  );
}
