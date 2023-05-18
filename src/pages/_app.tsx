import type {AppProps} from "next/app"
import "../styles/style.scss"

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
      <Component {...pageProps} />
  );
};

export default MyApp;
