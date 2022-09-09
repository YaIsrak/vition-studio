import {
	addDoc,
	collection,
	onSnapshot,
	orderBy,
	query,
	deleteDoc,
	doc,
	updateDoc,
	setDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

export default function useData(folder) {
	const collectionRef = collection(db, folder);

	// add Data
	const [isOpen, setIsOpen] = useState(false);
	const [newName, setnewName] = useState('');
	const [newDescription, setnewDescription] = useState('');
	async function handleSubmit() {
		try {
			const docRef = await addDoc(collection(db, folder), {
				name: newName,
				discription: newDescription,
				createdAt: new Date(),
				updatedAt: new Date(),
			});
			alert(`successfully added ${docRef.id}`);
		} catch (error) {
			alert(error);
		}
		setIsOpen(false);
	}

	// Read Data
	const [realTimeData, setrealTimeData] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		async function fatchData() {
			onSnapshot(query(collectionRef, orderBy('createdAt', 'desc')), (data) => {
				setrealTimeData(
					data.docs.map((doc) => ({
						...doc.data(),
						id: doc.id,
					}))
				);
			});
		}
		fatchData();
		setLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// update Data
	const [edit, setEdit] = useState(false);
	const [updateName, setupdateName] = useState();
	const [updateDescription, setUpdateDescription] = useState('');
	async function handleUpdate(id) {
		const docRef = doc(db, folder, id);
		await updateDoc(docRef, {
			name: updateName,
			discription: updateDescription,
			updatedAt: new Date(),
		});
		setEdit(false);
	}

	// Delete Data
	async function handleDelete(id) {
		const docRef = doc(db, folder, id);
		await deleteDoc(docRef);
	}

	return {
		// add data
		isOpen,
		setIsOpen,
		newName,
		setnewName,
		newDescription,
		setnewDescription,
		handleSubmit,

		// read Data
		realTimeData,
		loading,

		// update Data
		handleUpdate,
		edit,
		setEdit,
		updateName,
		setupdateName,
		updateDescription,
		setUpdateDescription,

		// delect data
		handleDelete,
	};
}
