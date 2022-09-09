import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/authContext';
import Link from '../Link';

export default function Navbar() {
	const router = useRouter();
	const { signout } = useAuth();

	return (
		<nav className='navbar navbar-expand-sm navbar-light bg-light'>
			<div className='container'>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link
								className={`nav-link ${
									router.pathname === router.asPath && 'active'
								}`}
								href='/admin'
							>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className={`nav-link ${
									router.pathname === router.asPath && 'active'
								}`}
								href='/admin/blogs'
							>
								Blog
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className={`nav-link ${
									router.pathname === router.asPath && 'active'
								}`}
								href='/admin/content'
							>
								Content
							</Link>
						</li>
					</ul>
					<Link href='/'>
						<button className='btn btn-outline-success mx-1'>
							Main Website
						</button>
					</Link>
					<button className='btn btn-outline-danger mx-1' onClick={signout}>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
}
