import type {AppProps} from "next/app"
import "../styles/style.scss"
import {useEffect, useState} from "react";
import Preloader from "@/components/Preloader/Preloader";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);

    const fetchData = async () => {
      startLoading();
      await new Promise((resolve) => setTimeout(resolve, 3000));
      stopLoading();
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
};

export default MyApp;
