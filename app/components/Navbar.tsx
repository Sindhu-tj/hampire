<<<<<<< HEAD
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Image
          src="/logo.png"
          alt="Hampire"
          width={300}
          height={300}
          className="w-[140px] h-auto"
          priority
        />

        {/* NAV */}
        <nav className="flex gap-12 text-[18px] font-semibold text-blue-800">
          <Link href="/" className="border-b-2 border-blue-800 pb-1">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}
=======
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Image
          src="/logo.png"
          alt="Hampire"
          width={300}
          height={300}
          className="w-[140px] h-auto"
          priority
        />

        {/* NAV */}
        <nav className="flex gap-12 text-[18px] font-semibold text-blue-800">
          <Link href="/" className="border-b-2 border-blue-800 pb-1">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}
>>>>>>> b84fc68743fcef89a51b8023a678670672e02ce5
