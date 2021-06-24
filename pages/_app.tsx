import type { AppProps } from "next/app";

import "../styles/tailwind.css";
import "../styles/main.scss";
import "react-toastify/dist/ReactToastify.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
