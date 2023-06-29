import type {AppProps} from "next/app"
import "../styles/style.scss"
import {Provider} from "react-redux";
import store from "@/store/store";


const MyApp = ({Component, pageProps}: AppProps) => {

  // const [isLoading, setIsLoading] = useState(false);
  //
  // useEffect(() => {
  //   const startLoading = () => setIsLoading(true);
  //   const stopLoading = () => setIsLoading(false);
  //
  //   const fetchData = async () => {
  //     startLoading();
  //     await new Promise((resolve) => setTimeout(resolve, 3000));
  //     stopLoading();
  //   };
  //
  //   fetchData();
  // }, []);

  // return (
  //   <AnimatePresence>{isLoading ? <Preloader/> : <Component {...pageProps} />}</AnimatePresence>
  // );

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
