import { useState } from 'react';
import { getArticles } from '../api/nytimes';

import { FiSearch } from 'react-icons/fi';
import Container from '../../components/layouts/Container';

const githubfinder = () => {
	const [text, setText] = useState('');
	const [show, setShow] = useState(false);

	const onChange = (e) => {
		e.preventDefault();
		setText(e.target.value);
		setShow(true);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		getArticles();
	};

	return (
		<div className='h-full w-full relative top-20'>
			<div className='text-center mb-16'>
				<h3>Headlines</h3>
			</div>
			<Container>
				<form
					className='flex items-center px-4 border-b border-gray-200'
					onSubmit={onSubmit}
				>
					<FiSearch className='w-6 h-6 mr-6 text-gray-300' />
					<input
						type='text'
						name='search'
						placeholder='Search a Github user'
						value={text}
						onChange={onChange}
						className='w-full focus:outline-none'
					/>
					<input type='submit' placeholder='submit' />
				</form>
			</Container>
		</div>
	);
};

export default githubfinder;
