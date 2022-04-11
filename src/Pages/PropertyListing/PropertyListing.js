import React from 'react';
import { firestore } from '../../firebase.js';
import axios from 'axios';
import SelectBar from '../../Components/SelectBar/SelectBar';
import PropertyOverview from '../../Components/PropertyOverview/PropertyOverview';
import PropertyDetail from '../../Components/PropertyDetail/PropertyDetail';
import Amenities from '../../Components/Amenities/Amenities';
import MortgageCalculator from '../../Components/MortgageCalculator/MortgageCalculator';
import CarouselGeneral from '../../Components/CarouselGeneral/CarouselGeneral';
import RequestForm from '../../Components/RequestForm/RequestForm';
import LightBoxCarousel from '../../Components/LightboxCarousel/LightBoxCarouselFeatured';
import placeholderImage from '../../assets/images/placeholder_listing.png';
import './PropertyListing.scss';

const API_URL = process.env.NODE_ENV === "production" ?
  'https://ja-realty-server.herokuapp.com' :
  'https://ja-realty-server.herokuapp.com';

function PropertyListing(props) {
  const [property, setProperty] = React.useState({ price: 0 });
  const [province, setProvince] = React.useState('');
  const [city, setCity] = React.useState('');
  const [cityCoord, setCityCoord] = React.useState({ lat: 0, lng: 0 });
  const [propertyCoord, setPropertyCoord] = React.useState({ lat: 0, lng: 0 });
  const [localpicks, setLocalpicks] = React.useState([]);
  const [relatedListings, setRelatedListings] = React.useState([]);

  React.useEffect(() => {
    getPropertyDetail(props.match.params.id);
  }, [props.match.params.id]);

  const getPropertyDetail = (id) => {
    firestore.collection('featuredproperty').doc(id).get()
      .then(res => {
        let propertyDetail = res.data();
        setProperty(propertyDetail);
        setProvince(propertyDetail.province);
        if (propertyDetail.city === 'Kitchener' || propertyDetail.city === 'Waterloo') {
          getRelatedListings('kw');
        } else {
          getRelatedListings(propertyDetail.city.toLowerCase());
        }
        if (propertyDetail.city.toLowerCase() === 'hamilton') {
          setCityCoord({ lat: 43.255203, lng: -79.843826 });
        } else if (propertyDetail.city.toLowerCase() === 'milton') {
          setCityCoord({ lat: 43.526646, lng: -79.891205 });
        } else if (propertyDetail.city.toLowerCase() === 'burlington') {
          setCityCoord({ lat: 43.328674, lng: -79.817734 });
        } else if (propertyDetail.city.toLowerCase() === 'kitchener') {
          setCityCoord({ lat: 43.452969, lng: -80.495064 });
        } else if (propertyDetail.city.toLowerCase() === 'waterloo') {
          setCityCoord({ lat: 43.466667, lng: -80.516670 });
        } else if (propertyDetail.city.toLowerCase() === 'london') {
          setCityCoord({ lat: 42.983612, lng: -81.249725 });
        }
        let images = [];
        firestore.collection('localpicks').get()
          .then(res => {
            let localPicks = [];
            res.docs.forEach(doc => {
              if (propertyDetail.province === 'ON' && doc.data().province === 'ON') {
                localPicks.push({
                  image: doc.data().img,
                  link: doc.data().link,
                  name: doc.data().name
                });
              } else if (propertyDetail.province === 'FL' && doc.data().province === 'FL') {
                localPicks.push({
                  image: doc.data().img,
                  link: doc.data().link,
                  name: doc.data().name
                });
              };
            });
            setLocalpicks(localPicks);
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err);
      })
  }

  const getRelatedListings = (currentCity) => {
    axios
      .get(`${API_URL}/city/${currentCity}`, {
        params: {
          pageNum: 1,
          resultsPerPage: 6,
          sortBy: 'createdOnDesc',
          mlsNumber: '',
          class: '',
          beds: '0',
          baths: '0',
          price: ['0', '5000000'],
          sqRange: ['0', '10000']
        }
      })
      .then(res => {
        let listingArray = [];
        let listingData = res.data.listings;
        res.data.listings.forEach(listing => {
          let propertyPrice = listing.listPrice;
          propertyPrice.substr(1);
          propertyPrice = propertyPrice.split('.')[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          let image = placeholderImage;
          if (listing.images[0]) {
            image = `https://cdn.repliers.io/${listing.images[0]}`;
          }
          console.log(image);
          listingArray.push({
            image: image,
            title: listing.address.streetName,
            text: propertyPrice,
            city: listing.address.city,
            beds: listing.details.numBedrooms,
            baths: listing.details.numBathrooms,
            sqft: listing.details.sqft,
            built: listing.details.yearBuilt,
            link: listing.mlsNumber,
            page: ''
          })
        });
        setRelatedListings(listingArray);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
    	<section className='propertylisting__videobox'>
        <iframe className='propertylisting__video' src={property.hero} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    	</section>
    	<PropertyOverview
        page={'featured'}
        address={property.address}
        city={property.city}
        province={property.province}
        price={property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        beds={property.beds}
        baths={property.baths}
        sqfeet={property.sqfeet}
        built={property.built}
        description={property.description}
        virtualTour={property.virtualTourUrl}
      />

      <section className='heroproperty'>
        {
          property.propertyImage ?
          <>
            <img className='heroproperty__img' src={property.propertyImage[0]} alt="property images" />
            <div className="heroproperty__container">
            <p className='heroproperty__text'>
              {property.propertyImage ? `1 out of ${property.propertyImage.length}` : ''}
            </p>
            <LightBoxCarousel
              imagesArr={property.propertyImage}
            />
            </div>
          </>     
          :
          <></>
        }
      </section>
      <Amenities
        bathroom={property.bathroom}
        kitchen={property.kitchen}
        backyard={property.backyard}
      />
      <PropertyDetail
        cityCoord={cityCoord}
        propertyCoord={propertyCoord}
        baths={property.baths}
        price={property.price}
      />
      <MortgageCalculator
        price={property.price}
      />
      <CarouselGeneral
        linkSource={'external'}
        title={ province === 'ON' ? 'Julian’s Ontario local picks' : 'Julian’s Florida local picks' }
        images={localpicks}
      />
      <RequestForm
      address = {property.address}
      />
      <CarouselGeneral
        linkSource={'property'}
        title={'Related listings'}
        images={relatedListings}
      />
    </>
  );
}

export default PropertyListing;