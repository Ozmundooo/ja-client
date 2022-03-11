import './Steps.scss';
import placeholderImg from '../../assets/images/placeholder_img.png';

function Steps(props) {
  return (
    <div className='steps'>
      {/* row direction in desktop, tablet*/}
      <div className="steps__row">
        <div className='steps__textbox'>
          <h3 className='steps__subtitle'>{props.title}</h3>
          <p className='steps__text'>{props.text}</p>
        </div>
        <img className='steps__image' src={placeholderImg} alt="" />
      </div>

      {/* column direction in mobile */}
      <div className="steps__column">
        <h3 className='steps__subtitle'>{props.title}</h3>
        <img className='steps__image' src={placeholderImg} alt="" />
        <p className='steps__text'>{props.text}</p>
      </div>
    </div>
  );
}

export default Steps;
