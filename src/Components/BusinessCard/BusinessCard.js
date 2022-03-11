import './BusinessCard.scss';

function BusinessCard(props) {
  return (
    <div className='businesscard'>
      <img className='businesscard__image' src={props.image} alt="" />
      <h3 className='businesscard__title'>{props.title}</h3>
      <h4 className='businesscard__subtitle'>{props.location}</h4>
      <p className='businesscard__text'>{props.description}</p>
      <a
        className='businesscard__link'
        href={props.link}
        target="_blank"
      >
        <button className='businesscard__button'>Learn More</button>
      </a>
    </div>
  );
}

export default BusinessCard;