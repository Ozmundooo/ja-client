import WrappedMap from '../Map/Map';
import dotenv from 'dotenv';
import './PropertyDetail.scss';
dotenv.config();

function PropertyDetail(props) {
  return (
    <section className='propertydetail'>
      <div className="propertydetail__container">
        <div className="propertydetail__tablebox">
          <table className="propertydetail__table">
            <tr>
              <th>Address</th>
              <td>{props.address}</td>
            </tr>
            <tr>
              <th>List price</th>
              <td>{props.price}</td>
            </tr>
            <tr>
              <th>Property Type</th>
              <td>{props.type}</td>
            </tr>
            <tr>
              <th>Square feet</th>
              <td>{props.sqfeet === '' || props.sqfeet === null ? 'N/A' : `${props.sqfeet}`}</td>
            </tr>
            <tr>
              <th>Bathrooms</th>
              <td>{props.baths}</td>
            </tr>
            <tr>
              <th>Floor area</th>
              <td>{'N/A'}</td>
            </tr>
            <tr>
              <th>Lot size</th>
              <td>{props.lot}</td>
            </tr>
            <tr>
              <th>Year built</th>
              <td>{props.built}</td>
            </tr>
          </table>
          <table className='propertydetail__table'>
            <tr>
              <th>MLS Number</th>
              <td>{props.mls}</td>
            </tr>
            <tr>
              <th>Listing brokerage</th>
              <td>{props.broker}</td>
            </tr>
            <tr>
              <th>Basement area</th>
              <td>{'N/A'}</td>
            </tr>
            <tr>
              <th>Postal code</th>
              <td>{props.postalcode}</td>
            </tr>
            <tr>
              <th>Tax amount</th>
              <td>{props.tax}</td>
            </tr>
            <tr>
              <th>Tax year</th>
              <td>{props.taxyear}</td>
            </tr>
            <tr>
              <th>Features</th>
              <td>{'N/A'}</td>
            </tr>
            <tr>
              <th>Amenties</th>
              <td>{'N/A'}</td>
            </tr>
          </table>
        </div>
        <div className="propertydetail__map">
          <h4 className='propertydetail__title'>Map</h4>
          <WrappedMap
            cityCoord={props.cityCoord}
            propertyCoord={props.propertyCoord}
            isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAPS_API}`}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
      </div>
      <div className="propertydetail__hiddenmap">
        <h4 className='propertydetail__title'>Map</h4>
        <WrappedMap
          cityCoord={props.cityCoord}
          propertyCoord={props.propertyCoord}
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAPS_API}`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    </section>
  );
}

export default PropertyDetail;
