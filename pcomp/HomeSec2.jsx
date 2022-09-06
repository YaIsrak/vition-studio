import { motion } from 'framer-motion';
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

const card = {
	hidden: {
		delayChildren: 0.3,
		staggerChildren: 0.2,
	},
};
const cardItem = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.2,
			ease: 'easeInOut',
		},
	},
};

function Card({ title, image, coming }) {
	return (
		<div
			className='col-md-4'
			whileHover={{ scale: 1.05 }}
			transition={{ duration: 0.03 }}
		>
			<motion.div className='card drop-shadow-md' variants={card} layout>
				<motion.div
					layout
					className='card-body'
					style={{ padding: '2em 1.5em' }}
					variants={cardItem}
					initial='hidden'
					whileInView='show'
				>
					<h1 className='fw-bold fs-2'>{title}</h1>
					{coming && <span className='badge bg-warning'>Coming soon</span>}
					<Image className='img-fluid' alt='' src={image} />
				</motion.div>
			</motion.div>
		</div>
	);
}
