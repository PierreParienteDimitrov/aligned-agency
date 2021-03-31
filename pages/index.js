import { Header } from '../components/homepage/Header';
import Carousel from '../components/carousel/Carousel';
import Tabs from '../components/tabs';
import ContentGroup from '../components/layouts/ContentGroup';
import { descriptions } from '../content/homepage/descriptions';

export default function Home() {
	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				<Header />

				<div className='my-36'>
					<ContentGroup
						headline={descriptions[0].headline}
						title={descriptions[0].title}
						description={descriptions[0].description}
					/>
				</div>
			</div>
			<Carousel />
			<div className='mt-64'>
				<ContentGroup
					headline={descriptions[1].headline}
					title={descriptions[1].title}
					description={descriptions[1].description}
				/>
			</div>
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
			{/* <Grid /> */}
		</div>
	);
}
