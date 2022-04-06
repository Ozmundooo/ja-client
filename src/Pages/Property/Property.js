import PropertyOverview from '../../Components/PropertyOverview/PropertyOverview';
import PropertyDetail from '../../Components/PropertyDetail/PropertyDetail';
import RequestForm from '../../Components/RequestForm/RequestForm';
import LightBoxCarousel from '../../Components/LightboxCarousel/LightBoxCarousel';
import MortgageCalculator from '../../Components/MortgageCalculator/MortgageCalculator';
import { useEffect, useState } from 'react';
import axios from 'axios';
import placeholderProperty from '../../assets/images/icn_noimage.svg';
import './Property.scss';

const API_URL = process.env.NODE_ENV === "production" ?
'https://ja-realty-server.herokuapp.com' :
'https://ja-realty-server.herokuapp.com';



function Property(props) {
  const [propertyDetail, setPropertyDetail] = useState({});
  const [propertyAddress, setPropertyAddress] = useState({});
  const [propertyPrice, setPropertyPrice] = useState('');
  const [propertyLot, setPropertyLot] = useState({});
  const [propertyNumber, setPropertyNumber] = useState('');
  const [propertyBrokerage, setPropertyBrokerage] = useState({});
  const [propertyTax, setPropertyTax] = useState({});
  const [propertyImage, setPropertyImage] = useState([]);
  const [cityCoord, setCityCoord] = useState({ lat: 0, lng: 0 });
  const [propertyCoord, setPropertyCoord] = useState({ lat: 0, lng: 0 });
  const [calculatorIsOpen, setCalculatorIsOpen] = useState(false);
  let listingPrice = propertyPrice;
  listingPrice.substr(1);
  listingPrice = listingPrice.split('.')[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  console.log("Test " + props.match.params.property);
  console.log("Test " + props.match.params.boardId);
  useEffect(() => {
    axios({
      url: `${API_URL}/${props.match.params.property}/${props.match.params.boardId}`,
    }).then(res => {
      setPropertyDetail(res.data.details);
      setPropertyAddress(res.data.address);
      setPropertyPrice(res.data.listPrice);
      setPropertyLot(res.data.lot);
      setPropertyNumber(res.data.mlsNumber);
      setPropertyBrokerage(res.data.office);
      setPropertyTax(res.data.taxes);
      setPropertyImage(res.data.images);
      setPropertyCoord({ lat: parseFloat(res.data.map.latitude), lng: parseFloat(res.data.map.longitude) });
      if (res.data.address.city.toLowerCase() === 'hamilton') {
        setCityCoord({ lat: 43.255203, lng: -79.843826 });
      } else if (res.data.address.city.toLowerCase() === 'milton') {
        setCityCoord({ lat: 43.526646, lng: -79.891205 });
      } else if (res.data.address.city.toLowerCase() === 'burlington') {
        setCityCoord({ lat: 43.328674, lng: -79.817734 });
      } else if (res.data.address.city.toLowerCase() === 'kitchener') {
        setCityCoord({ lat: 43.452969, lng: -80.495064 });
      } else if (res.data.address.city.toLowerCase() === 'waterloo') {
        setCityCoord({ lat: 43.466667, lng: -80.516670 });
      } else if (res.data.address.city.toLowerCase() === 'london') {
        setCityCoord({ lat: 42.983612, lng: -81.249725 });
      }
    }).catch(err => {
      console.log(err);
    })
  }, [props.match.params.property]);

  return (
    <>
      <section className='heroproperty'>
        {
          propertyImage.length > 0 ?
          <>
            <img className='heroproperty__img' src={`https://cdn.repliers.io/${propertyImage[0]}`} alt="property images" />
            <div className="heroproperty__container">
            <p className='heroproperty__text'>
              {propertyImage ? `1 out of ${propertyImage.length}` : ''}
            </p>
            <LightBoxCarousel
              imagesArr={propertyImage}
            />
            </div>
          </>
          :
          <>
          <img className='heroproperty__img' src={placeholderProperty} alt="property images" />
          </>
        }
      </section>
      <PropertyOverview
        address={propertyAddress.streetName}
        city={propertyAddress.city}
        province={`${propertyAddress.area}`.slice(0, 2).toUpperCase()}
        price={listingPrice}
        beds={propertyDetail.numBedrooms}
        baths={propertyDetail.numBathrooms}
        sqfeet={
          propertyDetail.sqft !== null ?
            `${propertyDetail.sqft}`.split('.')[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : ''
        }
        built={propertyDetail.yearBuilt}
        description={propertyDetail.description}
        virtualTour={propertyDetail.virtualTourUrl}
        setCalculatorIsOpen={setCalculatorIsOpen}
        calculatorIsOpen={calculatorIsOpen}
      />
      {
        calculatorIsOpen ?
          <MortgageCalculator price={propertyPrice} /> :
          <></>
      }
      <PropertyDetail
        address={`${propertyAddress.streetName} ${propertyAddress.city} ${propertyAddress.area}`}
        price={`$${listingPrice}`}
        type={propertyDetail.propertyType}
        // dwelling={propertyDetail.style}
        sqfeet={propertyDetail.sqft !== null ?
          `${propertyDetail.sqft}`.split('.')[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          : ''}
        baths={propertyDetail.numBathrooms}
        floor={'?????'}
        lot={propertyLot.acres === null ? 'N/A' : `${propertyLot.acres}`}
        built={propertyDetail.yearBuilt === null ? 'N/A' : `${propertyDetail.yearBuilt}`}
        mls={propertyNumber}
        broker={propertyBrokerage.brokerageName === null || propertyBrokerage.brokerageName === '' ? 'N/A' : `${propertyBrokerage.brokerageName}`}
        basement={'?????'}
        postalcode={propertyAddress.zip}
        tax={propertyTax.annualAmount === null ? 'N/A' : `${propertyTax.annualAmount}`}
        taxyear={propertyTax.assessmentYear === null ? 'N/A' : `${propertyTax.assessmentYear}`}
        features={'?????'}
        amenties={'?????'}
        cityCoord={cityCoord}
        propertyCoord={propertyCoord}
      />
      <RequestForm />
    </>
  );
}

export default Property;
