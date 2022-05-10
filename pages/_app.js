import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "../components/footer";
import Nav from "../components/nav";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="min-h-screen flex flex-col place-items-stretch" >
      <Nav />
      <Component className="grow" {...pageProps} />
      <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
