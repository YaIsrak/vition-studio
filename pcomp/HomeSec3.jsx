import Image from 'next/image';
// images
import Kadiza from '../public/images/People/khadiza.jpg';
import Nadir from '../public/images/People/nadir.jpg';
import Zabed from '../public/images/People/zabed.jpg';

export default function HomeSec3() {
	return (
		<section className='container'>
			<h1 className='fw-bold'>Worked with </h1>
			<div className='row gx-4'>
				<Card title='Khadizatul Kobra Sonya' image={Kadiza} />
				<Card title='Nadir on the go' image={Nadir} />
				<Card title='Zabed Pavez' image={Zabed} />
			</div>
		</section>
	);
}

function Card({ title, image }) {
	return (
		<div className='col-md-4'>
			<div
				className='card drop-shadow-md overflow-hidden border-none'
				style={{ borderRadius: '20%' }}
			>
				<Image className='img-fluid' alt='' src={image} />
				<div
					className='position-absolute h-full w-full'
					style={{
						background:
							'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 67%, rgba(0,0,0,1) 100%)',
					}}
				></div>
				<h1
					className='fw-bold fs-2 py-4 px-5 text-white position-absolute'
					style={{ bottom: 0 }}
				>
					{title}
				</h1>
			</div>
		</div>
	);
}
