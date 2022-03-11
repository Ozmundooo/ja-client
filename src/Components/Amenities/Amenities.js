import React from 'react';
import './Amenities.scss';

function Amenities(props) {
  const [currentTab, setCurrentTab] = React.useState('bathroom');
  const [currentImage, setCurrentImage] = React.useState('');

  React.useEffect(() => {
    setCurrentImage(props.bathroom);
  }, [props.bathroom, props.kitchen, props.backyard]);

  const changeTab = (tab, image) => {
    setCurrentTab(tab);
    setCurrentImage(image);
  }

  return (
    <section className='amenities'>
      <h3 className='amenities__title'>Amenities</h3>
      <div className='amenities__imagebox'>
        <div className='amenities__tabbox'>
          <button
            className={ currentTab === 'bathroom' ? 'amenities__button amenities__button--active' : 'amenities__button' }
            onClick={() => changeTab('bathroom', props.bathroom)}
          >
            Bathroom
          </button>
          <button
            className={ currentTab === 'kitchen' ? 'amenities__button amenities__button--active' : 'amenities__button' }
            onClick={() => changeTab('kitchen', props.kitchen)}
          >
            Kitchen
          </button>
          <button
            className={ currentTab === 'backyard' ? 'amenities__button amenities__button--active' : 'amenities__button' }
            onClick={() => changeTab('backyard', props.backyard)}
          >
            Backyard
          </button>
        </div>
        <img className='amenities__image' src={currentImage} alt="" />
      </div>
    </section>
  );
}

export default Amenities;