import useData from '../../hooks/useData';
import Blog from '../../pcomp/admin/Blog';
import NewBLog from '../../pcomp/admin/NewBlog';
import PrivateRoute from '../../pcomp/admin/privateRoute';

export default function BLogs() {
	const { realTimeData } = useData('blogs');

	return (
		<PrivateRoute>
			<section className='container'>
				<NewBLog />
				<h2>
					Blogs <span className='badge bg-dark'>{realTimeData.length}</span>
				</h2>
				{realTimeData.map((post, i) => (
					<Blog key={i} post={post} i={i} />
				))}
				{realTimeData.length === 0 && <p>Ops!, no blog. </p>}
			</section>
		</PrivateRoute>
	);
}
