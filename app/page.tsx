import Bento from "@/components/Bento";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="page-width">
        <Bento />
      </main>
      <Footer />
    </>
  );
}
