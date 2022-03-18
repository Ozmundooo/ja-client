import React from 'react';
import { firestore } from '../../firebase.js';
import SelectBar from '../../Components/SelectBar/SelectBar';
import GeneralText from '../../Components/GeneralText/GeneralText';
import CarouselGeneral from '../../Components/CarouselGeneral/CarouselGeneral';
import Steps from '../../Components/Steps/Steps';
import EmailSignup from '../../Components/EmailSignup/EmailSignup';
import heroOntario from '../../assets/images/hero_ontario.png'
import placeholderListing from '../../assets/images/placeholder_listing.png'
import imageBurlington from '../../assets/images/thumb_burlington.png';
import imageHamilton from '../../assets/images/thumb_hamilton.png';
import imageKw from '../../assets/images/thumb_kw.png';
import imageLondon from '../../assets/images/thumb_london.png';
import imageMilton from '../../assets/images/thumb_milton.png';

import axios from 'axios';
import PropertyCard from '../../Components/PropertyCard/PropertyCard';
import placeholderProperty from '../../assets/images/icn_noimage.svg';
import FilterListing from '../../Components/FilterListing/FilterListing';
import './Ontario.scss';

const API_URL = process.env.NODE_ENV === "production" ?
  'https://ja-realty-server.herokuapp.com' :
  'https://ja-realty-server.herokuapp.com';


const onCities = [
  {
    image: imageBurlington,
    link: '/city/burlington'
  },
  {
    image: imageHamilton,
    link: '/city/hamilton'
  },
  {
    image: imageKw,
    link: '/city/kw'
  },
  {
    image: imageLondon,
    link: '/city/london'
  },
  {
    image: imageMilton,
    link: '/city/milton'
  },
];

function Ontario() {
	const [onListings, setOnListings] = React.useState([]);

  const [currentCity, setCurrentCity] = React.useState({});
  const [currentProvince, setCurrentProvince] = React.useState('ON');
  const [localpicks, setLocalpicks] = React.useState([]);
  const [currentListings, setCurrentListings] = React.useState([]);
  const [pageNum, setPageNum] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [resultsPerPage, setResultsPerPage] = React.useState(12);
  const [sortBy, setSortBy] = React.useState('createdOnDesc');
  const [mlsNumber, setMlsNumber] = React.useState('');
  const [propertyType, setPropertyType] = React.useState('all');
  // const [salesType, setSalesType] = React.useState('lease')
  const [beds, setBeds] = React.useState(0);
  const [baths, setBaths] = React.useState(0);
  const [priceRange, setPriceRange] = React.useState(['0', '5000000']);
  const [sqRange, setSqRange] = React.useState(['0', '10000']);
  const [type,setType] = React.useState('sale');
  React.useEffect(() => {
    getFeaturedListings();
  }, []);

  React.useEffect(() => {
    getCityDetail('kitchener&city=waterloo&city=burlington&city=hamilton&city=london&city=milton');
  }, ['kitchener&city=waterloo&city=burlington&city=hamilton&city=london&city=milton', pageNum, resultsPerPage, sortBy]);

  const getFeaturedListings = () => {
    firestore.collection('featuredproperty').get()
      .then(res => {
        let ontarioListings = [];
        res.docs.forEach(property => {
          if (property.data().province === 'ON') {
            ontarioListings.push({
              link: `${property.data().id}`,
              image: property.data().thumbnail,
              title: property.data().address,
              text: `${property.data().price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
              city: property.data().city,
              beds: property.data().beds,
              baths: property.data().baths,
              sqfeet: property.data().sqfeet,
              built: property.data().built,
              page: 'featured'
            });
          };
        });
        setOnListings(ontarioListings);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const getCityDetail = (city) => {
    firestore.collection('city').doc(city).get()
      .then(res => {
        let cityDetails = res.data();
        setCurrentCity(cityDetails);
        setCurrentProvince(cityDetails.province);
        firestore.collection('localpicks').get()
          .then(res => {
            let localPicks = [];
            res.docs.forEach(doc => {
              if (doc.data().province === 'ON') {
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
      });
      //IF REQUESTING ONTARIO LISTINGS

        //IF REQUESTING FLORIDA LISTINGS
        getOnListings("kitchener&city=waterloo&city=burlington&city=hamilton&city=london&city=milton");
  }

  const getOnListings = (city) => {
    axios
      .get(`${API_URL}/city/${city}`, {
        params: {
          pageNum: pageNum,
          resultsPerPage: resultsPerPage,
          sortBy: sortBy,
          mlsNumber: mlsNumber,
          class: propertyType,
          beds: beds,
          baths: baths,
          price: priceRange,
          sqRange: sqRange,
          type: type
        }
      })
      .then(res => {
        setCurrentListings(res.data.listings);
        setTotalPages(res.data.numPages);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const renderPagination = () => {
    if (pageNum <= 3) {
      let i = 1;
      let pagination = [];
      while (i <= totalPages && i <= 7) {
        pagination.push(i);
        i++;
      };
      let renderedPagination = pagination.map(page => {
        return (
          <button
            className={pageNum == page ? 'city__pagebutton city__pagebutton--active' : 'city__pagebutton'}
            onClick={() => setPageNum(page)}
          >
            {page}
          </button>
        )
      });
      if (pagination[pagination.length - 1] !== totalPages) {
        renderedPagination.push(
          <p className='city__pagebutton city__pagebutton--last'>...{totalPages}</p>
        )
      };
      return renderedPagination;
    } else if (pageNum > 3) {
      let i = pageNum - 3;
      let pagination = [];
      while (i <= totalPages && i <= pageNum + 3) {
        pagination.push(i);
        i++;
      }
      let renderedPagination = pagination.map(page => {
        return (
          <button
            className={pageNum == page ? 'city__pagebutton city__pagebutton--active' : 'city__pagebutton'}
            onClick={() => setPageNum(page)}
            disabled={pageNum == page}
          >
            {page}
          </button>
        );
      });
      if (pagination[pagination.length - 1] !== totalPages) {
        renderedPagination.push(
          <p className='city__pagebutton city__pagebutton--last'>...  {totalPages}</p>
        )
      };
      return renderedPagination;
    }
  }

  const renderPaginationMobile = () => {
    if (pageNum <= 3) {
      let i = 1;
      let pagination = [];
      while (i <= totalPages && i <= 3) {
        pagination.push(i);
        i++;
      };
      let renderedPagination = pagination.map(page => {
        return (
          <button
            className={pageNum == page ? 'city__pagebutton city__pagebutton--active' : 'city__pagebutton'}
            onClick={() => setPageNum(page)}
          >
            {page}
          </button>
        )
      });
      if (pagination[pagination.length - 1] !== totalPages) {
        renderedPagination.push(
          <p className='city__pagebutton city__pagebutton--last'>...{totalPages}</p>
        )
      };
      return renderedPagination;
    } else if (pageNum > 3) {
      let i = pageNum - 1;
      let pagination = [];
      while (i <= totalPages && i <= pageNum + 1) {
        pagination.push(i);
        i++;
      }
      let renderedPagination = pagination.map(page => {
        return (
          <button
            className={pageNum == page ? 'city__pagebutton city__pagebutton--active' : 'city__pagebutton'}
            onClick={() => setPageNum(page)}
            disabled={pageNum == page}
          >
            {page}
          </button>
        );
      });
      if (pagination[pagination.length - 1] !== totalPages) {
        renderedPagination.push(
          <p className='city__pagebutton city__pagebutton--last'>...  {totalPages}</p>
        )
      };
      return renderedPagination;
    }
  }

  const resultsPerPageHandler = (num) => {
    setPageNum(1);
    setResultsPerPage(num);
  }

  const sortByHandler = (condition) => {
    setPageNum(1);
    setSortBy(condition);
  }

  const renderListings = () => {
    let renderedListings = currentListings.map(listing => {
      let propertyPrice = listing.listPrice;
      propertyPrice.substr(1);
      propertyPrice = propertyPrice.split('.')[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      let propertyName = listing.address.streetName;
      propertyName = propertyName.toLowerCase().split(' ');
      for (let i = 0; i < propertyName.length; i++) {
        propertyName[i] = propertyName[i].charAt(0).toUpperCase() + propertyName[i].substring(1);
      }
      propertyName = propertyName.join(' ');
      return (
        <PropertyCard
          link={listing.mlsNumber}
          boardId = {listing.boardId}
          image={listing.images.length > 0 ? `https://cdn.repliers.io/${listing.images[0]}` : placeholderProperty}
          title={propertyName}
          text={propertyPrice}
          city={listing.address.city}
          beds={listing.details.numBedrooms}
          baths={listing.details.numBathrooms}
          sqfeet={listing.details.sqft}
          built={listing.details.yearBuilt}
        />
      );
    });
    return renderedListings;
  };

  const filterSubmitHandler = async (e) => {
    e.preventDefault();
    setPageNum(1);
    getOnListings("kitchener&city=waterloo&city=burlington&city=hamilton&city=london&city=milton");
  }

	return (
		<>
			<section className='heroontario'>
				<img className='heroontario__image' src={heroOntario} alt="" />
			</section>
			<SelectBar 
        city={'on'}
      />
			{/* <GeneralText
				title={'Buying or selling a home in Ontario with us'}
				text={'text '.repeat(50)}
			/> */}
			<CarouselGeneral
				linkSource={'property'}
				title={'Ontario featured properties'}
				images={onListings}
			/>
			<EmailSignup theme='navy' />
			{/* <section className='steps-container'>
				<h3 className='steps__title'>What you should know: Buying</h3>
				<Steps title={'Step Title'} text={'text '.repeat(50)} />
				<Steps title={'Step Title'} text={'text '.repeat(50)} />
				<Steps title={'Step Title'} text={'text '.repeat(50)} />
				<a href="">
					<button className="steps__button">BROWSE FLORIDA CITIES</button>
				</a>
			</section>
			<section className='steps-container'>
				<h3 className='steps__title'>What you should know: Selling</h3>
				<Steps title={'Step Title'} text={'text '.repeat(50)} />
				<Steps title={'Step Title'} text={'text '.repeat(50)} />
				<Steps title={'Step Title'} text={'text '.repeat(50)} />
				<a href="">
					<button className="steps__button">BROWSE FLORIDA CITIES</button>
				</a>
			</section> */}
      <br></br>
      <br></br>
      <section className='city' id='listings'>
        <FilterListing
          submitHandler={filterSubmitHandler}
          mlsNumber={mlsNumber}
          setMlsNumber={setMlsNumber}
          propertyType={propertyType}
          setPropertyType={setPropertyType}
          beds={beds}
          setBeds={setBeds}
          baths={baths}
          setBaths={setBaths}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          sqRange={sqRange}
          setSqRange={setSqRange}
          type={type}
          setType={setType}
        />
        <form className='city__sortbox'>
          <select className='city__select' name="sortBy" onChange={(e) => sortByHandler(e.target.value)}>
            <option value="createdOnDesc">Date (Newest to oldest)</option>
            <option value="createdOnAsc">Date (Oldest to newest)</option>
            <option value="listPriceDesc">Price (Descending)</option>
            <option value="listPriceAsc">Price (Ascending)</option>
          </select>
          <select className='city__select' name="perPage" onChange={(e) => resultsPerPageHandler(e.target.value)}>
            <option value="12">12 properties per page</option>
            <option value="24">24 properties per page</option>
            <option value="36">36 properties per page</option>
          </select>
        </form>
        <nav className='city__list'>
          {renderListings()}
        </nav>
        <div className='city__paginationbox'>
          <button
            className='city__previousbutton'
            onClick={() => setPageNum(pageNum - 1)}
            disabled={pageNum == 1}
          >
            &#60;
          </button>
          {renderPagination()}
          <button
            className='city__nextbutton'
            onClick={() => setPageNum(pageNum + 1)}
            disabled={pageNum == totalPages}
          >
            &#62;
          </button>
        </div>
        <div className='city__paginationmobile'>
          <button
            className='city__previousbutton'
            onClick={() => setPageNum(pageNum - 1)}
            disabled={pageNum == 1}
          >
            &#60;
          </button>
          {renderPaginationMobile()}
          <button
            className='city__nextbutton'
            onClick={() => setPageNum(pageNum + 1)}
            disabled={pageNum == totalPages}
          >
            &#62;
          </button>
        </div>
      </section>
      {/* <CarouselGeneral
        linkSource={'external'}
        title={currentProvince === 'ON' ? 'Julian’s Ontario local picks' : 'Julian’s Florida local picks'}
        images={localpicks}
      /> */}
			<CarouselGeneral
				linkSource={'internal'}
				title={'Ontario cities'}
				images={onCities}
			/>
			<EmailSignup />
		</>
	);
}

export default Ontario;