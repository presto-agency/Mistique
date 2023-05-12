import type {AppProps} from "next/app"
import "../styles/style.scss"
import Cursor from "@/components/Cursor/Cursor";

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
      <Component {...pageProps} />
  );
};

export default MyApp;
