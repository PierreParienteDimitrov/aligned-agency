import React from 'react';
import styles from './ButtonPrimary.module.scss';

const ButtonPrimary = () => {
	return (
		<div
			className={`w-screen h-12 fixed bottom-0 flex items-center justify-center z-50 cursor-pointer ${styles.cta}`}
		>
			<h6>START YOUR NEXT PROJECT</h6>
		</div>
	);
};

export default ButtonPrimary;
