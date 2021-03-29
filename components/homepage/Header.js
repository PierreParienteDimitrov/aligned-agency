import React from 'react';
import ButtonPrimary from '../buttons/ButtonPrimary';
import TypewriterEffect from './TypewriterEffect';
import styles from '../../styles/Header.module.scss';

export const Header = () => {
	return (
		<header className={styles.headerBg}>
			<div
				className={`w-11/12 m-auto h-full flex flex-col justify-center md:w-10/12`}
			>
				<div className='mb-10'>
					<TypewriterEffect />
				</div>
			</div>
		</header>
	);
};
