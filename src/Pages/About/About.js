import GeneralText from '../../Components/GeneralText/GeneralText';
import Values from '../../Components/Values/Values';
import StaffIntro from '../../Components/StaffIntro/StaffIntro';
import TestimonialVideo from '../../Components/TestimonialVideo/TestimonialVideo';
import ContactForm from '../../Components/ContactForm/ContactForm';
import EmailSignup from '../../Components/EmailSignup/EmailSignup';
import heroAbout from '../../assets/images/hero_home.png';
import imgJulian from '../../assets/images/img_julian.png';
import imgAndres from '../../assets/images/img_andres.png';
import './About.scss';

function About() {
  return (
    <>
      <section className='heroabout'>
        <img src={heroAbout} className='heroabout__image' alt="" />
      </section>
      <GeneralText
        title={'About J.A Real Estate Group'}
        text={'At J.A Real Estate Group, we ensure to understand your needs and find the right property or buyer to meet your goal'}
      />
      <Values />
      <GeneralText
        title={'Our mission'}
        text={'Our team of industry experts are dedicated to helping you find and sell the property of your dreams through our extensive network and marketing efforts'}
      />
      <div className='meettheteam'>
        <h2 className='meettheteam__title'>Meet the team</h2>
        <StaffIntro
          image={imgJulian}
          name={'Julian Arcila'}
          position={'Principal Owner'}
          description={'With over 14 years of experience in real estate, Julian is the head and founder of J.A Real Estate Group. During these years, Julian has succeeded in creating a sustainable business based on integrity, professionalism, and accountability. Julian is eager to put his experience to work for each of his clients to help them achieve their real estate dream, and is able to do so in both English and Spanish'}
          calendar='https://calendly.com/julianarcila'
        />
        <StaffIntro
          inverse={true}
          image={imgAndres}
          name={'Andres F. Bojaca'}
          position={'Real Estate Agent'}
          description={'With his strong experience in laws, foreign jurisdictions, and finance, Andres makes a powerful addition to the team. As a real estate agent, his attention to detail and critical problem solving skills allow him to tailor smart and stress-free solutions for each of our clients, both in English and Spanish.'}
          calendar='https://calendly.com/andresbzambrano'
        />
      </div>
      {/* <TestimonialVideo
        text={'Julian helped my family and I purchase our first home in Cambridge ON, he was very professional and patient answering all our questions. He is always a call away willing to help with anything you need. For professional and highly productive real estate services I will always recommend Julian Arcila. Thank you once again for everything you have done. - Felipe Alfonso'}
        page={'about'}
      /> */}
        <TestimonialVideo
          text={'Julian helped my family and I purchase our first home in Cambridge ON, he was very professional and patient answering all our questions. He is always a call away willing to help with anything you need. For professional and highly productive real estate services I will always recommend Julian Arcila. Thank you once again for everything you have done. - Felipe Alfonso'}
          videoLink={'https://www.youtube.com/embed/n2bbzO0hzBA'}
          page={'about'}
        />
      <ContactForm />
      <EmailSignup theme='navy' />
    </>
  );
}

export default About;
