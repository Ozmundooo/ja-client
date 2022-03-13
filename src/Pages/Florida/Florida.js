import React from 'react';
import { firestore } from '../../firebase.js';
import SelectBar from '../../Components/SelectBar/SelectBar';
import GeneralText from '../../Components/GeneralText/GeneralText';
import CarouselGeneral from '../../Components/CarouselGeneral/CarouselGeneral';
import Steps from '../../Components/Steps/Steps';
import EmailSignup from '../../Components/EmailSignup/EmailSignup';
import heroFlorida from '../../assets/images/hero_florida.png';
import placeholderListing from '../../assets/images/placeholder_listing.png';
import imageClearwater from '../../assets/images/thumb_clearwater.png';
import imageFortmyers from '../../assets/images/thumb_fortmyers.png';
import imageMiamiarea from '../../assets/images/thumb_greatmiamiarea.png';
import imageOrlando from '../../assets/images/thumb_orlando.png';
import imageTampa from '../../assets/images/thumb_tampa.png';
import './Florida.scss';

const flCities = [
  {
    image: imageClearwater,
    link: '/city/clearwater'
  },
  {
    image: imageFortmyers,
    link: '/city/fortmyers'
  },
  {
    image: imageMiamiarea,
    link: '/city/gma'
  },
  {
    image: imageOrlando,
    link: '/city/orlando'
  },
  {
    image: imageTampa,
    link: '/city/tampa'
  },
];

function Florida() {
  const [flListings, setFlListings] = React.useState([]);

  React.useEffect(() => {
    getFeaturedListings();
  }, []);

  const getFeaturedListings = () => {
    firestore.collection('featuredproperty').get()
      .then(res => {
        let floridaListings = [];
        res.docs.forEach(property => {
          if (property.data().province === 'FL') {
            floridaListings.push({
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
        setFlListings(floridaListings);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <section className='heroflorida'>
        <img className='heroflorida__image' src={heroFlorida} alt="" />
      </section>
      <SelectBar />
      {/* <GeneralText
        title={'Buying and selling a home in Florida with us'}
        text={'text text text text text text text text text text text texttext text text text text texttext text text text text text text text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text text text text texttext text'}
        buttons={{
          buttonOne: {
            link: '',
            text: 'I’M CANADIAN'
          },
          buttonTwo: {
            link: '',
            text: 'I’M AMERICAN'
          }
        }}
      /> */}
      <CarouselGeneral
        linkSource={'property'}
        title={'Florida featured properties'}
        images={flListings}
      />
      {/* <section className='steps-container'>
        <h3 className='steps__title'>What Canadian residents should know: Buying</h3>
        <Steps title={'Step Title'} text={'text '.repeat(50)} />
        <Steps title={'Step Title'} text={'text '.repeat(50)} />
        <Steps title={'Step Title'} text={'text '.repeat(50)} />
        <a href="">
          <button className="steps__button">BROWSE FLORIDA CITIES</button>
        </a>
      </section>
      <section className='steps-container'>
        <h3 className='steps__title'>What Canadian residents should know: Selling</h3>
        <Steps title={'Step Title'} text={'text '.repeat(50)} />
        <Steps title={'Step Title'} text={'text '.repeat(50)} />
        <Steps title={'Step Title'} text={'text '.repeat(50)} />
        <a href="">
          <button className="steps__button">BROWSE FLORIDA CITIES</button>
        </a>
      </section>
      <EmailSignup theme='navy' />
      <section className="steps-container">
        <h3 className="steps__title">What American residents should know: Buying</h3>
        <Steps title={'Step Title'} text={'text '.repeat(50)} />
        <Steps title={'Step Title'} text={'text '.repeat(50)} />
        <Steps title={'Step Title'} text={'text '.repeat(50)} />
        <a href="">
          <button className="steps__button">BROWSE FLORIDA CITIES</button>
        </a>
      </section>
      <section className="steps-container">
        <h3 className="steps__title">What American residents should know: Selling</h3>
        <Steps title={'Step Title'} text={'text '.repeat(50)} />
        <Steps title={'Step Title'} text={'text '.repeat(50)} />
        <Steps title={'Step Title'} text={'text '.repeat(50)} />
        <a href="">
          <button className="steps__button">BROWSE FLORIDA CITIES</button>
        </a>
      </section>
      <CarouselGeneral
        linkSource={'internal'}
        title={'Florida cities'}
        images={flCities}
      /> */}
      <EmailSignup theme="navy"/>
    </>
  );
}

export default Florida;