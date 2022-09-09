import { useEffect, useState } from 'react';
import useData from '../../hooks/useData';

export default function Blog({ post, i }) {
	const {
		handleDelete,
		handleUpdate,
		edit,
		setEdit,
		updateName,
		setupdateName,
		updateDescription,
		setUpdateDescription,
	} = useData('blogs');

	useEffect(() => {
		setupdateName(post.name);
		setUpdateDescription(post.discription);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (edit) {
		// Edit Mode
		return (
			<>
				<div className='my-3'>
					<h3 className='text-primary'>Editing #wewu blog</h3>
					<label>Blog Name</label>
					<input
						type='text'
						className='form-control'
						value={updateName}
						onChange={(e) => setupdateName(e.target.value)}
					/>
					<label>Blog Description</label>
					<textarea
						type='textarea'
						className='form-control'
						value={updateDescription}
						onChange={(e) => setUpdateDescription(e.target.value)}
					/>
					<button
						className='btn btn-info mt-2'
						onClick={() => handleUpdate(post.id)}
					>
						Save
					</button>
				</div>
				<hr />
			</>
		);

		// Preview mode
	} else {
		return (
			<>
				<div className='my-3'>
					<h4>{post.name}</h4>
					<>
						<span className='text-sm text-muted'>
							Created on {post.createdAt.toDate().toUTCString()}
						</span>{' '}
						<br />
						<span className='text-sm text-muted'>
							Last updated on {post.updatedAt.toDate().toUTCString()}
						</span>
					</>
					<p>{post.discription}</p> <br />
					<button className='btn btn-info me-2' onClick={() => setEdit(true)}>
						Edit
					</button>
					<button
						className='btn btn-danger me-2'
						onClick={() => handleDelete(post.id)}
					>
						Delete
					</button>
				</div>
				<hr />
			</>
		);
	}
}
