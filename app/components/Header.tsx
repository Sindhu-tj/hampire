"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo + Brand */}
        <Link href="/" className="logo">
          <Image
            src="/logo.png"
            alt="Hampire Ice Cream"
            width={150}   // ⬅ increased size
            height={80}
            priority
          />
        
        </Link>

        {/* Navigation */}
        <nav className="nav">
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>
            About
          </Link>
          <Link
            href="/products"
            className={pathname === "/products" ? "active products" : "products"}
          >
            Products
          </Link>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
