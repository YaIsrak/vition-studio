import Link from 'next/link';

export default function Error404() {
	return (
		<div className='d-flex justify-center align-middle h-screen w-full '>
			<div className='m-auto text-center'>
				<h1 className='display-1 fw-bolder text-center fontBold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600'>
					404 error
				</h1>
				<h1 className='fw-bold text-center'>Wow! Such a empty 🐸</h1>
				<Link href='/'>Back to home</Link>
			</div>
		</div>
	);
}
