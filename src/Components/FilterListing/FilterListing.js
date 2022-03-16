import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './FilterListing.scss';

function FilterListing(props) {

  return (
    <form className='filterlisting' onSubmit={(e) => props.submitHandler(e)}>
      <div className='filterlisting__column'>
        <input
          className='filterlisting__input'
          name='mls'
          type="text"
          onChange={(e) => props.setMlsNumber(e.target.value)}
        />
        <label className='filterlisting__label' htmlFor="mls">Search by MLS number</label>
        <select
          className='filterlisting__input'
          name="class"
          onChange={(e) => props.setPropertyType(e.target.value)}
        >
          <option value="all">All property types</option>
          <option value="residential">Residential</option>
          <option value="condo">Condo</option>
          <option value="commercial">Commercial</option>
        </select>
        <br></br>
        <select
          className='filterlisting__input'
          name="class"
          onChange={(e) => props.setType(e.target.value)}
        >
          <option value="sale">Sale</option>
          <option value="lease">Lease</option>
        </select>        
      </div>
      <div className='filterlisting__column filterlisting__column--mid'>
        <p className='filterlisting__text'>Bedrooms: {props.beds === 0 ? 'Any' : props.beds}</p>
        <Slider
          className='filterlisting__slider'
          value={props.beds}
          onChange={(value) => props.setBeds(value)}
          min={0}
          max={5}
        />
        <p className='filterlisting__text'>Bathrooms: {props.baths === 0 ? 'Any' : props.baths}</p>
        <Slider
          className='filterlisting__slider'
          value={props.baths}
          onChange={(value) => props.setBaths(value)}
          min={0}
          max={5}
        />
      </div>
      <div className='filterlisting__column'>
        <p className='filterlisting__text'>Price: ${props.priceRange[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} - ${props.priceRange[1].toString() === '5000000' ? '5,000,000+' : props.priceRange[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <Range
          className='filterlisting__slider'
          value={props.priceRange}
          onChange={(value) => props.setPriceRange(value)}
          min={0}
          max={5000000}
        />
        <p className='filterlisting__text'>Square feet: {props.sqRange[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} - {props.sqRange[1].toString() === '10000' ? '10,000+' : props.sqRange[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <Range
          className='filterlisting__slider'
          value={props.sqRange}
          onChange={(value) => props.setSqRange(value)}
          min={0}
          max={10000}
        />
      </div>
      <button className='filterlisting__button' type='submit'>SEARCH</button>
    </form>
  );
}

export default FilterListing;