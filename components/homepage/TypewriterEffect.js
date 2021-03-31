import React from 'react';
import { TypewriterItems } from './TypewriterItems.js';
import Typewriter from 'typewriter-effect';
import styles from './Typewriter.module.scss';

const TypewriterEffect = () => {
	return (
		<div>
			<ul className={`${styles.typewriter}`}>
				<li>
					<Typewriter
						options={{
							changeDeleteSpeed: 60,
							delay: 60,
						}}
						onInit={(typewriter) => {
							typewriter
								.pauseFor(0)
								.typeString(`${TypewriterItems[0].title}`)
								.pauseFor(500)
								.deleteAll()
								.typeString(`${TypewriterItems[0].skill}`)
								.callFunction((state) => {
									state.elements.cursor.style.display = 'none';
								})
								.start();
						}}
					/>
				</li>
				<li>
					<Typewriter
						options={{
							changeDeleteSpeed: 60,
							delay: 60,
						}}
						onInit={(typewriter) => {
							typewriter
								.pauseFor(100)
								.typeString(`${TypewriterItems[1].title}`)
								.pauseFor(500)
								.deleteAll()
								.typeString(`${TypewriterItems[1].skill}`)
								.callFunction((state) => {
									state.elements.cursor.style.display = 'none';
								})
								.start();
						}}
					/>
				</li>
				<li>
					<Typewriter
						options={{
							changeDeleteSpeed: 60,
							delay: 60,
						}}
						onInit={(typewriter) => {
							typewriter
								.pauseFor(300)
								.typeString(`${TypewriterItems[2].title}`)
								.pauseFor(500)
								.deleteAll()
								.typeString(`${TypewriterItems[2].skill}`)
								.callFunction((state) => {
									state.elements.cursor.style.display = 'none';
								})
								.start();
						}}
					/>
				</li>
			</ul>
		</div>
	);
};

export default TypewriterEffect;
