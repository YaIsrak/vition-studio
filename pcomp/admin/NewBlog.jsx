import useData from '../../hooks/useData';

export default function NewBLog() {
	const {
		isOpen,
		setIsOpen,
		newName,
		setnewName,
		newDescription,
		setnewDescription,
		handleSubmit,
	} = useData('blogs');

	const handleOpen = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};

	return (
		<div>
			<button className='btn btn-primary' onClick={handleOpen}>
				+ New Blog
			</button>
			{isOpen && (
				<div className='my-4'>
					<h1>Add new Blog</h1>
					<label>Blog Name</label>
					<input
						type='text'
						className='form-control'
						value={newName}
						onChange={(e) => setnewName(e.target.value)}
					/>
					<label>Blog Description</label>
					<textarea
						type='textarea'
						className='form-control'
						value={newDescription}
						onChange={(e) => setnewDescription(e.target.value)}
					/>
					<button className='btn btn-info mt-2' onClick={handleSubmit}>
						Save
					</button>
				</div>
			)}
			<hr />
		</div>
	);
}
