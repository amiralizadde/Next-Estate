import Header from "@/components/templates/Header";
import Footer from "@/components/modules/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
