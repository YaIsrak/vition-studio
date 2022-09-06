import Image from 'next/image';
import Layout from '../pcomp/Layout';
import Logo from '../public/logo.png';

export default function About() {
	return (
		<Layout>
			<section className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<div className='d-flex justify-center align-items-center mb-12 position-relative top-50 translate-middle-y'>
							<Image alt='Logo' src={Logo} />
						</div>
					</div>
					<div className='col-md-6'>
						<div className='m-auto'>
							<h1 className='fw-bold display-4'>Vition Studio</h1>
							<p className='text-sm md:text-lg'>
								For Youtubers is the first ever thumbnail design & video editing
								agency in Bangladesh.
								<br />
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
								leo eros, lobortis in dolor eget, sagittis feugiat enim.
								Phasellus eu purus molestie, dignissim neque a, dignissim leo.
								Etiam consequat, enim ut dictum molestie, nibh metus eleifend
								lectus, sit amet maximus diam dolor in dui. Etiam non blandit
								ex.
							</p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
