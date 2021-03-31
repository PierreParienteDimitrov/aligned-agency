import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head />
				<link rel='stylesheet' href='https://use.typekit.net/oju4hxx.css' />
				<link rel='stylesheet' href='https://use.typekit.net/quf7okg.css' />
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
				/>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
