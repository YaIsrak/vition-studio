import BlogPost from '../pcomp/BlogPost';
import Layout from '../pcomp/Layout';
import useData from '../hooks/useData';
import Loading from '../pcomp/Loading';

export default function Blogs() {
	const { realTimeData, loading } = useData('blogs');

	return (
		<Layout>
			<section className='blog'>
				<div className='container'>
					<h1 className='display-2 fw-bold'>Blogs</h1>
					{loading && <Loading />}
					{realTimeData.map((post) => (
						<BlogPost key={post.id} name={post.name} body={post.discription} />
					))}
				</div>
			</section>
		</Layout>
	);
}
