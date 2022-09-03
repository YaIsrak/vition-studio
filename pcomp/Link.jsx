import Link from 'next/link';

export default function CLink({ children, className, href, ...rest }) {
	return (
		<Link href={href}>
			<a className={className} {...rest}>
				{children}
			</a>
		</Link>
	);
}
