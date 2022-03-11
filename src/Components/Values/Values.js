import icnDiscovery from '../../assets/icons/icn_discovery.svg';
import icnValue from '../../assets/icons/icn_value.svg';
import icnUpstanding from '../../assets/icons/icn_upstanding.svg';
import icnEfficiency from '../../assets/icons/icn_efficiency.svg';
import './Values.scss';

function Values() {
  return (
    <section className='values'>
      <h3 className='values__title'>Our values</h3>
      <ul className='values__list'>
        <ul className='values__box'>
          <li className='valuecard'>
            <img className='valuecard__image' src={icnDiscovery} alt="" />
            <h4 className='valuecard__title'>Discovery</h4>
            <p className='valuecard__text'>
              We discover properties that have exceptional potential
            </p>
          </li>
          <li className='valuecard'>
            <img className='valuecard__image' src={icnValue} alt="" />
            <h4 className='valuecard__title'>Value</h4>
            <p className='valuecard__text'>
              We ensure the highest value possible
            </p>
          </li>
        </ul>
        <ul className='values__box'>
          <li className='valuecard'>
            <img className='valuecard__image' src={icnUpstanding} alt="" />
            <h4 className='valuecard__title'>Upstanding</h4>
            <p className='valuecard__text'>
              Our clients’ needs and best interests are our highest priority
            </p>
          </li>
          <li className='valuecard'>
            <img className='valuecard__image' src={icnEfficiency} alt="" />
            <h4 className='valuecard__title'>Efficiency</h4>
            <p className='valuecard__text'>
              We shoot for the stars and aim for optimal success
            </p>
          </li>
        </ul>
      </ul>
    </section>
  );
}

export default Values;
