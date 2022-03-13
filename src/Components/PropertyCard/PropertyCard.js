import { Link } from 'react-router-dom';
import './PropertyCard.scss';

function PropertyCard(props) {
  return (
    <Link
      to={
        props.page === 'featured' ?
          `/featured/property/${props.link}` :
          `/property/${props.boardId}/${props.link}`
      }
      className='propertycard'
    >
      <img className='propertycard__img' src={props.image} alt="" />
      <h4 className='propertycard__title'>{props.title}</h4>
      <p className='propertycard__text'>${props.text}</p>
      <p className='propertycard__subtext'>{props.city}</p>
      <p className='propertycard__subtext'>
        {props.beds} Beds, {props.baths} Baths{props.sqfeet ? `, ${props.sqfeet.split(' ')[0].split('.')[0]} Sq. Ft.` : '' }{props.built ? `, Built ${props.built}` : ''}
      </p>
    </Link>
  );
}

export default PropertyCard;