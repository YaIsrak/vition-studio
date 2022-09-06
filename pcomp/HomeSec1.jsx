import { motion } from 'framer-motion';
import Button from './Button';

const animation = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	show: {
		opacity: 1,
		y: 0,
		transiton: {
			ease: 'easeIn',
			duration: 0.03,
		},
	},
};

export default function HomeSec1() {
	return (
		<section className='HomeSec1 h-screen'>
			<div className='container info position-absolute top-50 start-50 translate-middle'>
				<motion.h1
					className='fw-bold text-center display-3'
					variants={animation}
					initial='hidden'
					whileInView='show'
				>
					We make you <u className='text-red-500'>hassle</u> free
				</motion.h1>

				<Button
					href='mailto:ysdn@gmail.com'
					className='fs-5 position-relative start-50 translate-middle-x'
				>
					Contact Now
				</Button>
			</div>
		</section>
	);
}
