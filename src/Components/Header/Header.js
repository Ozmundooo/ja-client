import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../assets/images/logo_ja.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';

const floridaURL = process.env.NODE_ENV === "production" ?
  'https://' :
  'http://localhost:3000/florida';

const ontarioURL = process.env.NODE_ENV === "production" ?
  'https://' :
  'http://localhost:3000/ontario';

function Header(props) {
	function showSettings(event) {
		event.preventDefault();
	}

	return (
		<>
			<Sidebar />
			<header className='header'>
				<nav className='header__nav'>
					<Link to='/' className='header__link--logo'>
						<img className='header__logo' src={logo} alt="" />
					</Link>
					<div className='header__container'>
						<Link to='/about' className='header__link'>ABOUT</Link>
						<Link to='/localpicks' className='header__link'>JULIAN'S LOCAL PICKS</Link>
						<DropdownButton
							id="dropdown-basic-button"
							title="ONTARIO & FLORIDA"
							className='headerdropdown'
						>
						  <Dropdown.Item href={`${ontarioURL}`}>ONTARIO</Dropdown.Item>
						  <Dropdown.Item href={`${floridaURL}`}>FLORIDA</Dropdown.Item>
						</DropdownButton>
						<Link to='/featured' className='header__link'>FEATURED LISTINGS</Link>
					</div>
				</nav>
				<a className='header__buttonbox' href="https://calendly.com/julianarcila" target="_blank">
					<button className='header__button'>BOOK APPOINTMENT</button>
				</a>
			</header>
		</>
	);
}

export default Header;
