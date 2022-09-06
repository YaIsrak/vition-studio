import Button from './Button';
import { motion } from 'framer-motion';

export default function Footer() {
	return (
		<div className='container'>
			<motion.section
				className='row bg-indigo-500 px-16 rounded-3xl mx-3'
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.1,
					ease: 'easeIn',
				}}
			>
				<div className='col-md-6'>
					<h1 className='fw-bold text-white display-2 '>Need yours?</h1>
					<p className='fw-normal text-gray-300 fs-5'>
						Deliver exceptional customer support.
					</p>
				</div>
				<div className='col-md-6'>
					<Button className='fs-4 fw-bold px-4 py-2 position-relative top-50 start-50 translate-middle'>
						Get started
					</Button>
				</div>
			</motion.section>
			<hr />
			<section className='row'>
				<div className='col-md-6 text-muted fw-bold'>
					© 2022 All rights reserved. MD Yaser Arafat Israk
				</div>
				<div className='col-md-6'>
					<a
						className='me-2 fw-bold text-indigo-500'
						href='https://www.facebook.com/vitionstudioforyoutubers'
					>
						Facebook
					</a>
					<a
						className='me-2 fw-bold text-indigo-500'
						href='https://www.instagram.com/vitionstudio/'
					>
						Instagram
					</a>
				</div>
			</section>
		</div>
	);
}
