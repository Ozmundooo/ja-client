import Carousel, { consts } from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import PropertyCard from '../PropertyCard/PropertyCard';
import icnLeft from '../../assets/icons/icn_leftArrow.svg';
import icnRight from '../../assets/icons/icn_rightArrow.svg';
import './CarouselGeneral.scss';

function CarouselGeneral(props) {

  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 630, itemsToShow: 3 },
    { width: 1024, itemsToShow: 3 },
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

  const renderImages = () => {
    if (props.images) {
      let renderedImages = props.images.map(image => {
        if (props.linkSource === 'external') {
          return (
            <a className='carouselGeneral__item' href={`${image.link}`} target="_blank">
              <img className='carouselGeneral__image' src={image.image} alt="" />
              <p className='carouselGeneral__desc'>{image.name}</p>
            </a>
          );
        } else if (props.linkSource === 'property') {
          return (
            <Link>
              <PropertyCard
                image={image.image}
                title={image.title}
                text={image.text}
                city={image.city}
                beds={image.beds}
                baths={image.baths}
                sqfeet={image.sqfeet}
                built={image.built}
                link={image.link}
                page={image.page}
              />
            </Link>
          )
        } else {
          return (
            <Link className='carouselGeneral__item' to={`${image.link}`}>
              <img className='carouselGeneral__image ' src={image.image} alt="" />
            </Link>
          );
        }
      });
      return renderedImages;
    }
  }

  return (
    <section className='carouselGeneral'>
      <h2 className='carouselGeneral__title'>{props.title}</h2>
      <Carousel
        breakPoints={breakPoints}
        renderArrow={myArrow}
        pagination={false}
        className='carouselGeneral__carousel'
      >
        {renderImages()}
      </Carousel>
    </section>
  );
}

export default CarouselGeneral;
