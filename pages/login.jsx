import Link from 'next/link';
import { useAuth } from '../hooks/authContext';

export default function Login() {
	const { currentUser, setEmail, setPassword, handleLogin, signout } =
		useAuth();

	return (
		<div
			className='card position-absolute top-50 start-50 translate-middle'
			style={{ width: '20rem' }}
		>
			{currentUser ? (
				<div className='card-body'>
					<h1 className='text-center fw-bold'>You&apos;re already logged in</h1>

					<Link href='/admin'>
						<button className='my-1 btn btn-warning form-control'>
							Admin?
						</button>
					</Link>
					<button
						className='my-1 btn btn-danger form-control'
						onClick={signout}
					>
						Log out?
					</button>
				</div>
			) : (
				<div className='card-body'>
					<h1 className='text-center fw-bold'>Login</h1>
					{/* email */}
					<label className=''>Email</label>
					<input
						type='email'
						className='form-control'
						placeholder='Enter your email address'
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>

					{/* Password */}
					<label className=''>Password</label>
					<input
						type='Password'
						className='form-control'
						placeholder='Enter your password'
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					{/* Submit */}
					<button
						className='btn btn-primary form-control mt-3'
						onClick={handleLogin}
					>
						Submit
					</button>
				</div>
			)}
		</div>
	);
}
