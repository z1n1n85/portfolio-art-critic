import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      defaultTheme="dark"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
