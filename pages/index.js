// import styles from '../styles/Home.module.css';

import Carousel from '../components/carousel/Carousel';
import AboutMe from '../components/homepage/AboutMe';
import DesignSection from '../components/homepage/DesignSection';
// import Grid from '../components/homepage/Grid';
import { Header } from '../components/homepage/Header';
import Tabs from '../components/tabs';

export default function Home() {
	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				<Header />
				<AboutMe />
			</div>
			<Carousel />
			<DesignSection />
			<div className='mb-64'>
				<Tabs>
					<div label='Tab 1'>
						<h2>Tab1</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, porro!
						</p>
					</div>

					<div label='Tab 2'>
						<h2>Tab2</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, porro!
						</p>
					</div>

					<div label='Tab 3'>
						<h2>Tab3</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, porro!
						</p>
					</div>
				</Tabs>
			</div>
			{/* <Grid /> */}
		</div>
	);
}
