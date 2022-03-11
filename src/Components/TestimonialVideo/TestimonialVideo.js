import { Link } from 'react-router-dom';
import './TestimonialVideo.scss';

function TestimonialVideo(props) {
	console.log(props.videoLink);

	return (
		<section className='testimonialvideo'>
			<div className='testimonialvideo__container'>
				<div className={!props.inverse ? 'testimonialvideo__content' : 'testimonialvideo__content testimonialvideo__content--inverse'}>
					<div className='testimonialvideo__contentbox'>
						<h3 className='testimonialvideo__title'>Testimonial</h3>
						<p className='testimonialvideo__text'>{props.text}</p>
						<div className='testimonialvideo__buttonbox'>
							{props.page !== 'testimonial' ?
								<Link to='/testimonials' className='testimonialvideo__link' href="">
									<button className='testimonialvideo__button'>READ MORE</button>
								</Link> :
								<></>
							}
							<a
								className='testimonialvideo__link'
								href="https://calendly.com/julianarcila"
								target="_blank"
							>
								<button className='testimonialvideo__button'>BOOK APPOINTMENT</button>
							</a>
						</div>
					</div>
						<iframe className='testimonialvideo__video' src={props.videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
				</div>
			</div>

			{/* mobile */}
			<div className='testimonialvideo__mobile'>
				<div className='testimonialvideo__contentbox'>
					<h3 className='testimonialvideo__title'>Testimonial</h3>
					<div className='testimonialvideo__video'>
						{/* some video here */}
					</div>
					<p className='testimonialvideo__text'>{props.text}</p>
					<div className='testimonialvideo__buttonbox'>
						{props.page !== 'testimonial' ?
							<Link to='/testimonials' className='testimonialvideo__link' href="">
								<button className='testimonialvideo__button'>READ MORE</button>
							</Link> :
							<></>
						}
						<a
							className='testimonialvideo__link'
							href="https://calendly.com/julianarcila"
							target="_blank"
						>
							<button className='testimonialvideo__button'>BOOK APPOINTMENT</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TestimonialVideo;
