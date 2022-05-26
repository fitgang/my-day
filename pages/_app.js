import { wrapper } from '../store/store';
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return  <Component {...pageProps} />
};

export default wrapper.withRedux(MyApp);