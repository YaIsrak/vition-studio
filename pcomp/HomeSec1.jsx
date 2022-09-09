import Image from 'next/image';
import Button from './Button';

export default function HomeSec1() {
	return (
		<section className='HomeSec1 h-screen'>
			<div className='container'>
				{/* <div className='container info position-absolute top-50 start-50 translate-middle'> */}
				<div className='row'>
					<div className='col-md-6 py-auto'>
						<h1 className='fw-bold display-3'>
							We make you <u className='text-red-500'>hassle</u> free
						</h1>
						<Button href='mailto:ysdn@gmail.com' className='fs-4 my-3'>
							Contact now
						</Button>
					</div>
					<div className='col-md-6'>
						<Image
							className=''
							alt='img'
							src={'/images/cover.png'}
							height='432'
							width='698'
						/>
						{/* <h1>hello</h1> */}
					</div>
				</div>
			</div>
		</section>
	);
}
