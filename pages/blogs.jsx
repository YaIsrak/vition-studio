import BlogPost from '../pcomp/BlogPost';
import Layout from '../pcomp/Layout';

export default function Blogs() {
	const posts = [
		{
			title: 'Blog',
			body: 'This is a blog post',
		},
		{
			title: 'Contact',
			body: 'This is a contact post',
		},
		{
			title: 'Blog',
			body: 'This is a blog post',
		},
	];

	return (
		<Layout>
			<section className='blog'>
				<div className='container'>
					<h1 className='display-2 fw-bold'>Blogs</h1>
					{posts.map((post) => (
						<BlogPost key={post.title} title={post.title} body={post.body} />
					))}
				</div>
			</section>
		</Layout>
	);
}
