import React from 'react';
import { Redirect } from 'react-router-dom';
import './SelectBar.scss';

function SelectBar(props) {
  const [redirectLink, setRedirectLink] = React.useState('default');

  return (
    <div className='selectbar'>
      <select
        name="city"
        className='selectbar__select'
        onChange={(e) => setRedirectLink(e.target.value)}
      >
        <option value="default">Search city...</option>
        {
          props.city === 'on' ?
          <>
            <option value="/city/burlington">Burlington</option>
            <option value="/city/hamilton">Hamilton</option>
            <option value="/city/kw">Kitchener Waterloo</option>
            <option value="/city/london">London</option>
            <option value="/city/milton">Milton</option>
          </>
          :
          <>
            <option value="/city/clearwater">Clearwater</option>
            <option value="/city/fortmyers">Fort Myers</option>
            <option value="/city/gma">Great Miami Area</option>
            <option value="/city/orlando">Orlando</option>
            <option value="/city/tampa">Tampa</option>
          </>
        }

      </select>
      <a
        href="https://calendly.com/julianarcilaremax/30min"
        className='selectbar__book'
        target="_blank"
      >
        Book an Appointment
      </a>
      {
        redirectLink !== 'default' ?
          <Redirect to={`${redirectLink}`} /> :
          <></>
      }
    </div>
  );
}

export default SelectBar;
