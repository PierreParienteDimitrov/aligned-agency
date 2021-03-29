import React from 'react';

const Grid = () => {
	return (
		<div className='w-11/12 m-auto grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 md:w-10/12 lg:grid-cols-3'>
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
	);
};

export default Grid;
