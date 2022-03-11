import { Link } from 'react-router-dom';
import './MoreInfo.scss';

function MoreInfo(props) {
  return (
    <section className='moreinfo'>
    	<h4 className='moreinfo__title'>
    		Looking for more information about the buying and selling process in Florida or Ontario? Select a destination!
    	</h4>
    	<div className='moreinfo__buttonbox'>
    		<Link to='/ontario'>
    			<button className='moreinfo__button'>ONTARIO</button>
    		</Link>
    		<Link to='/florida'>
    			<button className='moreinfo__button'>FLORIDA</button>
    		</Link>
    	</div>
    </section>
  );
}

export default MoreInfo;