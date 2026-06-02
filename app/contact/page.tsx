<<<<<<< HEAD
"use client";

import { useState } from "react";
import "./contact.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully ✅");
      setForm({ name: "", phone: "", email: "", message: "" });
    } else {
      alert("Failed to send message ❌");
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="overlay">
          <h1>Our Contact</h1>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-section">
        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>📧 info@Hampire.in</p>
            <p>📞 +91-8079796767</p>

            <h3>Address</h3>
            <p>
              NO34-A SY NO 153/4, 157/1,<br />
              Sanklapura industrial area, Hospet, Bellary<br />
              Karnataka – 591125
            </p>

            <h3>Follow Us</h3>
            <div className="social-icons">
              <span>ⓕ</span>
              <span>◎</span>
              <span>in</span>
              <span>X</span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-form">
            <h2>Send a Message</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Send</button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
=======
"use client";

import { useState } from "react";
import "./contact.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully ✅");
      setForm({ name: "", phone: "", email: "", message: "" });
    } else {
      alert("Failed to send message ❌");
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="overlay">
          <h1>Our Contact</h1>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-section">
        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>📧 info@Hampire.in</p>
            <p>📞 +91-8079796767</p>

            <h3>Address</h3>
            <p>
              NO34-A SY NO 153/4, 157/1,<br />
              Sanklapura industrial area, Hospet, Bellary<br />
              Karnataka – 591125
            </p>

            <h3>Follow Us</h3>
            <div className="social-icons">
              <span>ⓕ</span>
              <span>◎</span>
              <span>in</span>
              <span>X</span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-form">
            <h2>Send a Message</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Send</button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
>>>>>>> b84fc68743fcef89a51b8023a678670672e02ce5
