import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />     {/* ✅ Header visible on ALL pages */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
