import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Footer from '../components/footer';  

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
