import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCIf9Z83qN2GzFSwcn-E4_fHvqjB7vYYkQ',
	authDomain: 'vition-studio.firebaseapp.com',
	projectId: 'vition-studio',
	storageBucket: 'vition-studio.appspot.com',
	messagingSenderId: '1068591961310',
	appId: '1:1068591961310:web:183ce7de99edc8eafa1e4f',
	measurementId: 'G-96S9ZLQB72',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
