import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}
