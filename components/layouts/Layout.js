import Head from 'next/head';
import ButtonPrimary from '../buttons/ButtonPrimary';
import Nav from './Nav';

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Aligned Agency</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			{/* <Nav /> */}
			{children}
			<ButtonPrimary />
		</div>
	);
};

export default Layout;
