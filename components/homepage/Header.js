import TypewriterEffect from './TypewriterEffect';
import Container from '../layouts/Container';
import styles from './Header.module.scss';

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
