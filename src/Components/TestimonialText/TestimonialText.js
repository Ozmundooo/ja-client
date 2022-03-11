import Carousel, { consts } from 'react-elastic-carousel';
import icnLeft from '../../assets/icons/icn_leftArrowTwo.svg';
import icnRight from '../../assets/icons/icn_rightArrowTwo.svg';
import './TestimonialText.scss';

function TestimonialText(props) {

	const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1024, itemsToShow: 1 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    let pointer = (type === consts.PREV) ? icnLeft : icnRight;
    return (
      <button
        className='carouselGeneral__button'
        onClick={onClick}
        disabled={isEdge}
      >
        <img className='carouselGeneral__buttonimage' src={pointer} alt="" />
      </button>
    )
  }

  const renderText = () => {
    if (props.testimonials) {
      let renderedText = props.testimonials.map(testimonial => {
        return (
          <div className='testimonialtext__item'>
            <h4 className='testimonialtext__name'>{testimonial.name}</h4>
            <div className='testimonialtext__divider'></div>
            <p className='testimonialtext__text'>
              {testimonial.text}
            </p>
          </div>
        );
      });
      return renderedText;
    }
  }

  return (
    <section className='testimonialtext'>
      <Carousel
        breakPoints={breakPoints}
        itemsToShow={1}
        renderArrow={myArrow}
        pagination={false}
        className='carouselGeneral__carousel'
      >
        {renderText()}
      </Carousel>
    </section>
  );
}

export default TestimonialText;
