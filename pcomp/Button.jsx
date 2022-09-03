import { motion } from 'framer-motion';

const animation = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	show: {
		opacity: 1,
		y: 0,
	},
};

export default function Button({ children, href, className, ...rest }) {
	return (
		<motion.a
			href={href}
			variants={animation}
			initial='hidden'
			whileInView='show'
		>
			<button
				className={`btn btn-dark ${className}`}
				{...rest}
				// style={{ background: '#0e0e0e', color: 'white', border: 'none' }}
			>
				{children}
			</button>
		</motion.a>
	);
}
