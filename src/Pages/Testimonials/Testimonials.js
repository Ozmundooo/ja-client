import TestimonialVideo from '../../Components/TestimonialVideo/TestimonialVideo';
import TestimonialText from '../../Components/TestimonialText/TestimonialText';
import EmailSignup from '../../Components/EmailSignup/EmailSignup';
import heroImage from '../../assets/images/hero_testimonials.png';
import happyClientOne from '../../assets/images/img_happyclient1.png';
import happyClientTwo from '../../assets/images/img_happyclient2.png';
import happyClientThree from '../../assets/images/img_happyclient3.png';
import './Testimonials.scss';

function Testimonials() {
  return (
    <>
      <section className='herotestimonial'>
        <img src={heroImage} className='herotestimonial__image' alt="" />
      </section>
      <TestimonialVideo
        text={'Julian helped my family and I purchase our first home in Cambridge ON, he was very professional and patient answering all our questions. He is always a call away willing to help with anything you need. For professional and highly productive real estate services I will always recommend Julian Arcila. Thank you once again for everything you have done. - Felipe Alfonso'}
        page='testimonial'
        videoLink={'https://www.youtube.com/embed/K7to6QeDGVg'}
      />
      <TestimonialText
        testimonials={[
          {
            name: 'Client Name',
            text: '“text text text text text text text text text text text texttext text text text text texttext text text text text text text text text text text texttext text text text text texttext text text text text texttext text text text text”'
          },
          {
            name: 'Client Name',
            text: '“text text text text text text text text text text text texttext text text text text texttext text text text text text text text text text text texttext text text text text texttext text text text text texttext text text text text”'
          }
        ]}
      />
      {/* <TestimonialVideo
        text={'text text text text text text text text text text text texttext text text text text texttext text text text text text text text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text text text text texttext text text text text texttext text text text text texttext text text text text text'}
        page='testimonial'
        inverse={true}
      /> */}
      {/* <TestimonialText
        testimonials={[
          {
            name: 'Client Name',
            text: '“text text text text text text text text text text text texttext text text text text texttext text text text text text text text text text text texttext text text text text texttext text text text text texttext text text text text”'
          },
          {
            name: 'Client Name',
            text: '“text text text text text text text text text text text texttext text text text text texttext text text text text text text text text text text texttext text text text text texttext text text text text texttext text text text text”'
          }
        ]}
      /> */}
      <TestimonialVideo
        text={'Julian has been nothing but helpful during our home buying process. Not only did he help us purchase our first unit, he has been extremely helpful throughout our new investment goals and has been our go-to agent during this time. -Ingrid Astorquiza'}
        page='testimonial'
        videoLink={'https://www.youtube.com/embed/n2bbzO0hzBA'}
      />
      {/* <section className='happyclients'>
        <h3 className='happyclients__title'>This month’s happy clients</h3>
        <ul className='happyclients__list'>
          <li className='clientcard'>
            <img className='clientcard__image' src={happyClientOne} alt="" />
            <h4 className='clientcard__name'>Client name</h4>
            <p className='clientcard__location'>Location of purchase</p>
            <a className='clientcard__sale' href="">Sale info</a>
          </li>
          <li className='clientcard'>
            <img className='clientcard__image' src={happyClientTwo} alt="" />
            <h4 className='clientcard__name'>Client name</h4>
            <p className='clientcard__location'>Location of purchase</p>
            <a className='clientcard__sale' href="">Sale info</a>
          </li>
          <li className='clientcard'>
            <img className='clientcard__image' src={happyClientThree} alt="" />
            <h4 className='clientcard__name'>Client name</h4>
            <p className='clientcard__location'>Location of purchase</p>
            <a className='clientcard__sale' href="">Sale info</a>
          </li>
        </ul>
      </section> */}
      <EmailSignup theme='navy' />
    </>
  );
}

export default Testimonials;
