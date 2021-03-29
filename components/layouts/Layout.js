import Head from 'next/head';
import ButtonPrimary from '../buttons/ButtonPrimary';
import Nav from './Nav';

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{/* <Nav /> */}
			{children}
			<ButtonPrimary />
		</div>
	);
};

export default Layout;
