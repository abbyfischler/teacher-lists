import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "../components/footer";
import Nav from "../components/nav";


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="flex flex-col min-h-screen">
        <Nav />
        <Component {...pageProps} />
        <Footer className="self-end" />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
