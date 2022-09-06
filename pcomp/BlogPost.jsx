import { useState } from 'react';

export default function BlogPost({ title, body }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		isOpen === false ? setIsOpen(true) : setIsOpen(false);
		console.log(isOpen);
	};
	return (
		<>
			<div className='py-4 row'>
				<div className='col-11'>
					<h1 className='post-title'>
						{title}
						{'  '}
					</h1>
				</div>
				<div className='col-1'>
					<button
						className={`ms-auto btn ${
							!isOpen ? 'btn-dark' : 'btn-dark-outline'
						}`}
						onClick={handleOpen}
					>
						{!isOpen ? 'Open' : 'Close'}
					</button>
				</div>
			</div>
			<p
				className='post-description text-2xl'
				style={{
					height: `${isOpen ? 'auto' : '0px'}`,
					overflow: 'hidden',
					transition: '0.3s',
				}}
			>
				{body}
			</p>
			<hr />
		</>
	);
}
