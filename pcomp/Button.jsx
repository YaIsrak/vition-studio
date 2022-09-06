export default function Button({ children, href, className, ...rest }) {
	return (
		<a href={href}>
			<button
				className={`btn btn-dark ${className}`}
				{...rest}
				// style={{ background: '#0e0e0e', color: 'white', border: 'none' }}
			>
				{children}
			</button>
		</a>
	);
}
