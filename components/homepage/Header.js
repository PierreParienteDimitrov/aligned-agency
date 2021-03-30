import React from 'react';
import ButtonPrimary from '../buttons/ButtonPrimary';
import TypewriterEffect from './TypewriterEffect';
import styles from '../../styles/Header.module.scss';
import Container from '../layouts/Container';

export const Header = () => {
	return (
		<Container>
			<header className={styles.headerBg}>
				<div className={`h-full flex flex-col justify-center`}>
					<div className='mb-10'>
						<TypewriterEffect />
					</div>
				</div>
			</header>
		</Container>
	);
};
