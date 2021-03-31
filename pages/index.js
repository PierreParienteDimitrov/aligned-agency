import Container from '../components/layouts/Container';
import { Header } from '../components/homepage/Header';
import Carousel from '../components/carousel/Carousel';
import Tabs from '../components/tabs';
import ContentGroup from '../components/layouts/ContentGroup';
import { descriptions } from '../content/homepage/descriptions';
import ScrollAnimation from 'react-animate-on-scroll';

import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<>
			{/* Header */}
			<div className='h-full w-full relative'>
				{/* Background Image */}
				<img
					src='/headerBgLg.png'
					alt='Aligned Agency Logo Large'
					className={`absolute top-0 left-0 w-screen h-full object-cover object-right ${styles.zIndex}`}
				/>
				{/* Content */}
				<div className='z-50'>
					<Container>
						<header className='py-16 grid grid-cols-1 items-center z-10 gap-y-28 md:grid-cols-2 md:py-36'>
							<Header />
							<ScrollAnimation
								animateIn='fadeIn'
								animateOut='fadeOut'
								duration={1}
								delay={500}
							>
								<ContentGroup
									headline={descriptions[0].headline}
									title={descriptions[0].title}
									description={descriptions[0].description}
								/>
							</ScrollAnimation>
						</header>
					</Container>
				</div>
			</div>

			{/* Carousel */}
			<ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' duration={1}>
				<Carousel />
			</ScrollAnimation>

			{/* Content Group */}
			<ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' duration={1}>
				<Container>
					<div className='mt-64 md:w-8/12'>
						<ContentGroup
							headline={descriptions[1].headline}
							title={descriptions[1].title}
							description={descriptions[1].description}
						/>
					</div>
				</Container>
			</ScrollAnimation>

			{/* Tabs */}
			<ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' duration={1}>
				<div className='mt-20 mb-64'>
					<Tabs>
						<div label='Research'>
							<h2>User Research</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, porro!
							</p>
						</div>

						<div label='Experience'>
							<h2>Experience</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, porro!
							</p>
						</div>

						<div label='Interface'>
							<h2>Interface</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, porro!
							</p>
						</div>
					</Tabs>
				</div>
			</ScrollAnimation>
		</>
	);
}
