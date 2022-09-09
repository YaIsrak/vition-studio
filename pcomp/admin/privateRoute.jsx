import { useAuth } from '../../hooks/authContext';
import Login from '../../pages/login';
import Navbar from './Navbar';

export default function PrivateRoute({ children }) {
	const { currentUser } = useAuth();

	if (!currentUser) {
		return <Login />;
	}
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
