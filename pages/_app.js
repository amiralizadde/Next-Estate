import Footer from "@/components/modules/Footer";
import "@/styles/globals.css";
import Navbar from "@/components/modules/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
