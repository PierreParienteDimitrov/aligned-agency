// import styles from '../styles/Home.module.css';

import Carousel from '../components/carousel/Carousel';
import AboutMe from '../components/homepage/AboutMe';
import DesignSection from '../components/homepage/DesignSection';
// import Grid from '../components/homepage/Grid';
import { Header } from '../components/homepage/Header';

export default function Home() {
	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				<Header />
				<AboutMe />
			</div>
			<Carousel />
			<DesignSection />
			{/* <Grid /> */}
		</div>
	);
}
