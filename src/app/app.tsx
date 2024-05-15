import { AppProps } from 'next/app';
import '../styles/globals.css'; // Example import for global styles

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
