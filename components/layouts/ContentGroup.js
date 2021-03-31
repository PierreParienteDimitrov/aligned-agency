import Container from '../layouts/Container';

const ContentGroup = ({ headline, title, description }) => {
	return (
		<div className='w-full border-l-2 pl-4'>
			<h3 className='mb-2'>{headline}</h3>
			<h5 className='mb-8'>{title}</h5>
			<p>{description}</p>
		</div>
	);
};

export default ContentGroup;
