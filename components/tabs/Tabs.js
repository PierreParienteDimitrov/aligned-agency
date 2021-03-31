import { useState } from 'react';
import { CarouselItems } from '../carousel/CarouselItems';
import Container from '../layouts/Container';
import styles from './Tabs.module.scss';

const Tabs = ({ children }) => {
	const [activeTab, setActiveTab] = useState(children[0].props.label);

	console.log(children[0].props.label);

	const handleClick = (e, newActiveTab) => {
		e.preventDefault();
		setActiveTab(newActiveTab);
	};

	return (
		<Container>
			<div>
				{/* Tabs  */}
				<ul className={`w-full flex overflow-x-scroll mb-10 ${styles.tabs}`}>
					{children.map((item, index) => {
						const label = item.props.label;

						return (
							<li className={label === activeTab ? styles.current : ''} key={label}>
								<a href='#' onClick={(e) => handleClick(e, label)}>
									{label}
								</a>
							</li>
						);
					})}
				</ul>

				{/* Tab Content */}
				{children.map((item) => {
					const content = item.props.children;

					if (item.props.label === activeTab) {
						return (
							<div className={styles.tabContent} key={item.props.label}>
								{content}
							</div>
						);
					}
				})}
			</div>
		</Container>
	);
};

export default Tabs;
