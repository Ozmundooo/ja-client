import React from 'react';
import { firestore } from '../../firebase.js';
import GeneralText from '../../Components/GeneralText/GeneralText';
import BusinessCard from '../../Components/BusinessCard/BusinessCard';
import EmailSignup from '../../Components/EmailSignup/EmailSignup';
import heroLocal from '../../assets/images/hero_local.png';
import './LocalPicks.scss';

function LocalPicks() {
  const [onLocals, setOnLocals] = React.useState([]);
  const [flLocals, setFlLocals] = React.useState([]);

  React.useEffect(() => {
    getLocalPicks();
  }, []);

  const getLocalPicks = () => {
    firestore.collection('localpicks').get()
      .then(res => {
        let ontario = [];
        let florida = [];
        let allLocals = res.docs;
        allLocals.forEach(local => {
          if (local.data().province === 'ON') {
            ontario.push(local.data());
          } else if (local.data().province === 'FL') {
            florida.push(local.data());
          }
        });
        setOnLocals(ontario);
        setFlLocals(florida);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const renderPicks = (locals) => {
    let renderedPicks = locals.map(local => {
      return (
        <BusinessCard
          image={local.img}
          title={local.name}
          location={local.location}
          description={local.description}
          link={local.link}
        />
      )
    });
    return renderedPicks;
  }

  return (
    <>
      <section className='herolocal'>
        <img src={heroLocal} className='herolocal__image' alt="" />
      </section>
      <GeneralText
        title={"About Julian's local picks"}
        text={"Showing love to our community is crucial, and what better way to do so than showcasing some of the best local businesses that we believe deserve the spotlight?"}
        buttons={{
          buttonOne: {
            link: 'https://j-arealestate.com/ontario#listings',
            text: 'ONTARIO PICKS'
          },
          buttonTwo: {
            link: 'https://j-arealestate.com/florida#listings',
            text: 'FLORIDA PICKS'
          }
        }}
      />
      <GeneralText
        title={"Ontario"}
        text={"Ontario has become a culture hut where you can experience and learn about different cultural backgrounds through food and services. We focus on picking businesses that have gone above and beyond with their customer service experience"}
        notop={true}
      />
      <section className='cardbox'>
        <div className='cardbox__list'>
          {renderPicks(onLocals)}
        </div>
      </section>
      <GeneralText
        title={"Florida"}
        text={"A curated list of must visit businesses in the beautiful state of  Florida. Get to know the culture and residents through these fantastic businesses"}
        notop={true}
      />
      <section className='cardbox'>
        <div className='cardbox__list'>
          {renderPicks(flLocals)}
        </div>
      </section>
      <EmailSignup notop={true} />
    </>
  );
}

export default LocalPicks;
