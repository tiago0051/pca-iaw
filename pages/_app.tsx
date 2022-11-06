import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/UserContext";
import GlobalStyles from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
