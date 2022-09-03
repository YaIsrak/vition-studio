import HomeSec1 from '../pcomp/HomeSec1';
import HomeSec2 from '../pcomp/HomeSec2';
import HomeSec3 from '../pcomp/HomeSec3';
import Layout from '../pcomp/Layout';

export default function Home() {
	return (
		<Layout>
			<HomeSec1 />
			<hr />
			<HomeSec2 />
			<hr />
			<HomeSec3 />
		</Layout>
	);
}
