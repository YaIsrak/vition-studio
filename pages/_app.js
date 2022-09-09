import '../styles/css/output.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/css/globals.css';
import { AuthProvider } from '../hooks/authContext';

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp;
