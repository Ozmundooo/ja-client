import React from 'react';
import { firestore } from '../../firebase.js';
import { Link } from 'react-router-dom';
import CarouselGeneral from '../../Components/CarouselGeneral/CarouselGeneral';
import StaffIntro from '../../Components/StaffIntro/StaffIntro';
import TestimonialVideo from '../../Components/TestimonialVideo/TestimonialVideo';
import EmailSignup from '../../Components/EmailSignup/EmailSignup';
import heroHome from '../../assets/images/hero_home.png';
import imageAboutus from '../../assets/images/img_aboutus.png';
import imageBurlington from '../../assets/images/thumb_burlington.png';
import imageHamilton from '../../assets/images/thumb_hamilton.png';
import imageKw from '../../assets/images/thumb_kw.png';
import imageLondon from '../../assets/images/thumb_london.png';
import imageMilton from '../../assets/images/thumb_milton.png';
import imageClearwater from '../../assets/images/thumb_clearwater.png';
import imageFortmyers from '../../assets/images/thumb_fortmyers.png';
import imageMiamiarea from '../../assets/images/thumb_greatmiamiarea.png';
import imageOrlando from '../../assets/images/thumb_orlando.png';
import imageTampa from '../../assets/images/thumb_tampa.png';
import placeholderProperty from '../../assets/images/placeholder_listing.png';
import placeholderBusiness from '../../assets/images/placeholder_business.png';
import './Home.scss';

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


function Home() {
  const [onListings, setOnListings] = React.useState([]);
  const [flListings, setFlListings] = React.useState([]);
  const [localPicks, setLocalPicks] = React.useState([]);

  React.useEffect(() => {
    getFeaturedListings();
    getLocalPicks();
  }, []);

  const getFeaturedListings = () => {
    firestore.collection('featuredproperty').get()
      .then(res => {
        let ontarioListings = [];
        let floridaListings = [];
        res.docs.forEach(property => {
          if (property.data().province === 'ON') {
            ontarioListings.push({
              link: `${property.data().id}`,
              image: placeholderProperty,
              title: property.data().address,
              text: `${property.data().price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
              city: property.data().city,
              beds: property.data().beds,
              baths: property.data().baths,
              sqfeet: property.data().sqfeet,
              built: property.data().built,
              page: 'featured',
            });
          } else {
            floridaListings.push({
              link: `${property.data().id}`,
              image: placeholderProperty,
              title: property.data().address,
              text: `${property.data().price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
              city: property.data().city,
              beds: property.data().beds,
              baths: property.data().baths,
              sqfeet: property.data().sqfeet,
              built: property.data().built,
              page: 'featured',
            });
          };
        });
        setOnListings(ontarioListings);
        setFlListings(floridaListings);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const getLocalPicks = () => {
    firestore.collection('localpicks').get()
      .then(res => {
        let localList = [];
        res.docs.forEach(pick => {
          localList.push({
            image: pick.data().img,
            link: pick.data().link,
            name: pick.data().name
          })
        });
        setLocalPicks(localList);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <section className='herohome'>
        <img src={heroHome} className='herohome__image' alt="" />
        <div className='herohome__contentbox'>
          <h1 className='herohome__title'>J.A Real Estate Group</h1>
          <h3 className='herohome__subtitle'>Search new listings now</h3>
          <div className='herohome__buttonbox'>
            <Link to='/ontario'>
              <button className='herohome__button'>ONTARIO LISTINGS</button>
            </Link>
            <Link to='/florida'>
              <button className='herohome__button'>FLORIDA LISTINGS</button>
            </Link>
          </div>
        </div>
      </section>
      <CarouselGeneral
        linkSource={'property'}
        title={'Ontario featured properties'}
        images={onListings}
      />
      <CarouselGeneral
        linkSource={'property'}
        title={'Florida featured properties'}
        images={flListings}
      />
      <div className='abouthome'>
        <h2 className='abouthome__title'>About us</h2>
        <StaffIntro
          image={imageAboutus}
          name={'Producers of Exceptional Returns'}
          description={`We maximize the value of your properties through expert renovations and management optimization. We collaborate with trusted sponsors that specialize in both property refurbishing and rebuilding.`}
        />
        <TestimonialVideo
          text={'Julian has been nothing but helpful during our home buying process. Not only did he help us purchase our first unit, he has been extremely helpful throughout our new investment goals and has been our go-to agent during this time.  - Ingrid Astorquiza'}
          videoLink={'https://www.youtube.com/embed/n2bbzO0hzBA'}
        />
      </div>
      <CarouselGeneral
        linkSource={'external'}
        title={'Featured local businesses'}
        images={localPicks}
      />
      <EmailSignup theme='navy' />
      <CarouselGeneral
        linkSource={'internal'}
        title={'Ontario destinations'}
        images={onCities}
      />
      <CarouselGeneral
        linkSource={'internal'}
        title={'Florida destinations'}
        images={flCities}
      />
    </>
  );
}

export default Home;
