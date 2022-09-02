import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
				<Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'></Script>
			</body>
		</Html>
	);
}
