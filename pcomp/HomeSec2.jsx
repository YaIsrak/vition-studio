import Image from 'next/image';
// images
import GraphicDesign from '../public/images/Card/1.jpg';
import VideoEditing from '../public/images/Card/2.jpg';
import Marketing from '../public/images/Card/3.jpg';

export default function HomeSec2() {
	return (
		<section className='container'>
			<h1 className='fw-bold'>We Provide </h1>
			<div className='row gx-4 gy-4'>
				<Card title='Thumbnail Design' image={GraphicDesign} />
				<Card title='Video Editing' image={VideoEditing} />
				<Card title='Facebook Marketing' image={Marketing} coming={true} />
			</div>
		</section>
	);
}

function Card({ title, image, coming }) {
	return (
		<div className='col-md-4'>
			<div className='card drop-shadow-md'>
				<div className='card-body' style={{ padding: '2em 1.5em' }}>
					<h1 className='fw-bold fs-2'>{title}</h1>
					{coming && <span className='badge bg-warning'>Coming soon</span>}
					<Image className='img-fluid' alt='' src={image} />
				</div>
			</div>
		</div>
	);
}
