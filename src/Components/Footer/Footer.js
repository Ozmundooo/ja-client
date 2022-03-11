import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import icnFb from '../../assets/icons/icn_fb.svg';
import icnIg from '../../assets/icons/icn_ig.svg';
import icnLinkedin from '../../assets/icons/icn_linkedin.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss';

const floridaURL = process.env.NODE_ENV === "production" ?
  'https://' :
  'http://localhost:3000/florida';

const ontarioURL = process.env.NODE_ENV === "production" ?
  'https://' :
  'http://localhost:3000/ontario';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__navbox'>
        <nav className='footer__nav'>
          <div className='footer__navgroup'>
            <Link to='/about' className='footer__link'>ABOUT</Link>
            <Link to='/localpicks' className='footer__link'>JULIAN’S LOCAL PICKS</Link>
            <Link to='/testimonials' className='footer__link'>TESTIMONIALS</Link>
            {/* <DropdownButton
              id="dropdown-basic-button"
              title="ONTARIO & FLORIDA"
              className='headerdropdown footer__link--desktop footer__link'
            >
              <Dropdown.Item href={`${ontarioURL}`}>ONTARIO</Dropdown.Item>
              <Dropdown.Item href={`${floridaURL}`}>FLORIDA</Dropdown.Item>
            </DropdownButton> */}
            <Link to={`${ontarioURL}`} className='footer__link'>ONTARIO</Link>
            <Link to={`${floridaURL}`} className='footer__link'>FLORIDA</Link>
            <Link to='/featured' className='footer__link footer__link--desktop'>FEATURED LISTINGS</Link>
          </div>
          <div className='footer__navgroup footer__navgroup--tablet'>
            {/* <DropdownButton
              id="dropdown-basic-button"
              title="ONTARIO & FLORIDA"
              className='headerdropdown'
            >
              <Dropdown.Item href={`${ontarioURL}`}>ONTARIO</Dropdown.Item>
              <Dropdown.Item href={`${floridaURL}`}>FLORIDA</Dropdown.Item>
            </DropdownButton> */}
            <Link to={`${ontarioURL}`} className='footer__link'>ONTARIO</Link>
            <Link to={`${floridaURL}`} className='footer__link'>FLORIDA</Link>
            <Link to='/featured' className='footer__link'>FEATURED LISTINGS</Link>
            <div className='footer__hiddensns'>
              <a
                className='footer__sns'
                href="https://www.facebook.com/jarealestategroup"
                target="_blank"
              >
                <img className='footer__snsimage' src={icnFb} alt="" />
              </a>
              <a
                className='footer__sns'
                href="https://www.instagram.com/officialjarealestategroup/"
                target="_blank"
              >
                <img className='footer__snsimage' src={icnIg} alt="" />
              </a>
              <a
                className='footer__sns'
                href="https://www.linkedin.com/company/ja-real-estate-group"
                target="_blank"
              >
                <img className='footer__snsimage' src={icnLinkedin} alt="" />
              </a>
            </div>
          </div>
          <div className='footer__snsgroup'>
            <a
              className='footer__sns'
              href="https://www.facebook.com/jarealestategroup"
              target="_blank"
            >
              <img className='footer__snsimage' src={icnFb} alt="" />
            </a>
            <a
              className='footer__sns'
              href="https://www.instagram.com/officialjarealestategroup/"
              target="_blank"
            >
              <img className='footer__snsimage' src={icnIg} alt="" />
            </a>
            <a
              className='footer__sns'
              href="https://www.linkedin.com/company/ja-real-estate-group"
              target="_blank"
            >
              <img className='footer__snsimage' src={icnLinkedin} alt="" />
            </a>
          </div>
        </nav>
      </div>
      <div className='footer__bar'>
        <p className='footer__bartext'>© 2021 by Julian Arcila Real Estate Group. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;