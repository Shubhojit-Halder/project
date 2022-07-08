import { Provider } from "react-redux";
import { store } from "../app_appslices/app/store";
import "../styles/globals.css";
// import { BrowserRouter, Routes } from "react-router-dom";
function MyApp({ Component, pageProps }) {
	return (
		// <BrowserRouter>
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
		/* </BrowserRouter> */
	);
}

export default MyApp;
