import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.scss';

function Sidebar() {
  return (
    <Menu right>
      <Link to='/about' className='header__link'>ABOUT</Link>
      <Link to='/localpicks' className='header__link'>JULIAN'S LOCAL PICKS</Link>
      <Link to='/ontario' className='header__link'>ONTARIO</Link>
      <Link to='/florida' className='header__link'>FLORIDA</Link>
      <Link to='/featured' className='header__link'>FEATURED LISTINGS</Link>
    </Menu>
  )
}

export default Sidebar;