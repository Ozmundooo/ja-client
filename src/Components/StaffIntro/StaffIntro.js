import { Link } from 'react-router-dom';
import './StaffIntro.scss';

function StaffIntro(props) {
  return (
    <div className='staffIntro'>
      <div className={!props.inverse ? 'staffIntro__content' : 'staffIntro__content staffIntro__content--inverse'}>
        <img className='staffIntro__image' src={props.image} alt="" />
        <div className='staffIntro__contentBox'>
          <h3 className='staffIntro__name'>{props.name}</h3>
          {props.position ?
            <h4 className='staffIntro__position'>{props.position}</h4> :
            <></>
          }
          <p className='staffIntro__text'>{props.description}</p>
          {props.position ?
            <a href={props.calendar} target="_blank">
              <button className='staffIntro__button'>BOOK APPOINTMENT</button>
            </a> :
            <Link to='/about'>
              <button className='staffIntro__button'>LEARN MORE</button>
            </Link>
          }
        </div>
      </div>
    </div>
  );
}

export default StaffIntro;
