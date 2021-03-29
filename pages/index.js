// import styles from '../styles/Home.module.css';

import AboutMe from '../components/homepage/AboutMe';
import Grid from '../components/homepage/Grid';
import { Header } from '../components/homepage/Header';

export default function Home() {
	return (
		<div>
			<Header />
			<AboutMe />
			<Grid />
		</div>
	);
}
