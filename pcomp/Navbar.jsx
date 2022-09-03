import Image from 'next/image';
import CLink from './Link';
import logo from '../public/logo.png';
import { useRouter } from 'next/router';
import style from '../styles/css/nav.module.css';

export default function Navbar() {
	const router = useRouter();

	const logoSize = 10;
	const links = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'About',
			link: '/about',
		},
		{
			name: 'Blog',
			link: '/blogs',
		},
		{
			name: 'Content',
			link: '/content',
		},
	];

	return (
		<nav className='navbar navbar-expand-sm navbar-light'>
			<div className='container'>
				<CLink href='/' className='navbar-brand'>
					<Image
						src={logo}
						alt='logo'
						height={3 * logoSize}
						width={5 * logoSize}
					/>
				</CLink>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<div className='mx-auto'></div>
					<ul className='navbar-nav'>
						{links.map((link, i) => (
							<li key={i} className='nav-item mx-1'>
								<CLink
									className={`nav-link fw-bold px-3 py-1 ${style.navLink} ${
										router.pathname === link.link && style.active
									}`}
									aria-current='page'
									href={link.link}
								>
									{link.name}
								</CLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
