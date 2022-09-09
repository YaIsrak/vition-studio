import { useAuth } from '../../hooks/authContext';
import PrivateRoute from '../../pcomp/admin/privateRoute';

export default function Dashboard() {
	const { currentUser } = useAuth();

	return (
		<PrivateRoute>
			<section className='container'>
				{currentUser && (
					<>
						<h1>Welcome {currentUser.email}</h1>
						<p>User id: {currentUser.uid}</p>
						<p>Created at {currentUser.metadata.creationTime}</p>
						<p>Last logged in {currentUser.metadata.lastSignInTime}</p>
					</>
				)}
			</section>
		</PrivateRoute>
	);
}
