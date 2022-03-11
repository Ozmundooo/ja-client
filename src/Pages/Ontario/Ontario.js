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
import './Ontario.scss';

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

  React.useEffect(() => {
    getFeaturedListings();
  }, []);

  const getFeaturedListings = () => {
    firestore.collection('featuredproperty').get()
      .then(res => {
        let ontarioListings = [];
        res.docs.forEach(property => {
          if (property.data().province === 'ON') {
            ontarioListings.push({
              link: `${property.data().id}`,
              image: placeholderListing,
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