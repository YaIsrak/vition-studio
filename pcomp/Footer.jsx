import Button from './Button';

export default function Footer() {
	return (
		<div className='container'>
			<section className='row bg-indigo-500 px-20 rounded-3xl mx-3'>
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
			</section>
			<hr />
			<section className=''>heelo</section>
		</div>
	);
}
