import { useState, useEffect } from 'react';
import ContainerFluid from '../layouts/ContainerFluid';
import { CarouselItems } from './CarouselItems';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import styles from './Carousel.module.scss';

const Carousel = () => {
	const [current, setCurrent] = useState(0);
	const [hover, setHover] = useState(false);
	const length = CarouselItems.length;
	// console.log(current);

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
		// console.log(current);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
		// console.log(current);
	};

	useEffect(() => {
		let t = null;
		if (!hover) {
			t = setTimeout(() => {
				setCurrent(current === length - 1 ? 0 : current + 1);
			}, 5000);
		} else if (hover) {
			clearTimeout(t);
		}
	}, [current, hover]);

	const mouseEnter = (e) => {
		setHover(true);
		e.stopPropagation();
		console.log(hover);
	};

	const mouseLeave = (e) => {
		setHover(false);
		e.stopPropagation();
		console.log(hover);
	};

	return (
		<ContainerFluid>
			<div
				className={`mb-24 relative flex cursor-pointer ${styles.carousel}`}
				onMouseEnter={mouseEnter}
				onMouseLeave={mouseLeave}
			>
				{hover && (
					<>
						<BsChevronCompactLeft className={styles.leftArrow} onClick={prevSlide} />
						<BsChevronCompactRight
							className={styles.rightArrow}
							onClick={nextSlide}
						/>
					</>
				)}

				{CarouselItems.map((image, index) => {
					return (
						<div
							key={index}
							className={index === current ? styles.active : styles.slide}
						>
							{index === current && (
								<img
									src={image.src}
									alt={image.alt}
									className={`w-screen h-full object-cover`}
								/>
							)}
						</div>
					);
				})}
			</div>
		</ContainerFluid>
	);
};

export default Carousel;
