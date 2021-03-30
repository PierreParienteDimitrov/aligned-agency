import React from 'react';
import Container from '../layouts/Container';

const Grid = () => {
	return (
		<Container>
			<div className='grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				<div className='h-96 bg-gray-600 mb-24'>
					<p>Project Title</p>
				</div>
				<div className='h-96 bg-gray-600 mb-24'>
					<p>Project Title</p>
				</div>
				<div className='h-96 bg-gray-600 mb-24'>
					<p>Project Title</p>
				</div>
			</div>
		</Container>
	);
};

export default Grid;
