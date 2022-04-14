import { firestore } from '../../firebase.js';
import './ContactForm.scss';

function ContactForm() {

  const submitHandler = (e) => {
    e.preventDefault();
    e.target.reset();
  }

  return (
    <section className='contactform'>
      <h2 className='contactform__title'>Contact us</h2>
      <form className='contactform__form' action="https://formsubmit.co/740cce934af42c546b08598c738a3350" method="POST" >
        <input type="hidden" name="_subject" value="Contact Form: New Message"></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_next" value={window.location.origin}></input>
        <label className='contactform__label' htmlFor="name">Enter your name *</label>
        <input
          className='contactform__textinput'
          type="text"
          name='name'
          required={true}
        />
        <label className='contactform__label' htmlFor="email">Enter your email *</label>
        <input
          className='contactform__textinput'
          type="email"
          name='email'
          required={true}
        />
        <label className='contactform__label' htmlFor="">Select your location*</label>
        <select className='contactform__select' name="location">
          <option className='contactform__option' value="Milton">Milton</option>
          <option className='contactform__option' value="KW">Kitchener & Waterloo</option>
          <option className='contactform__option' value="Hamilton">Hamilton</option>
          <option className='contactform__option' value="Burlington">Burlington</option>
          <option className='contactform__option' value="London">London</option>
          <option className='contactform__option' value="Great Miami Area">Great Miami Area</option>
          <option className='contactform__option' value="Fort Myers">Fort Myers</option>
          <option className='contactform__option' value="Tampa">Tampa</option>
          <option className='contactform__option' value="Clearwater">Clearwater</option>
          <option className='contactform__option' value="Orlando">Orlando</option>
        </select>
        <label className='contactform__label' htmlFor="message">Enter your message *</label>
        <textarea className='contactform__textarea' name="message" required={true}></textarea>
        <button className='contactform__button' type='submit'>SUBMIT</button>
      </form>
    </section>
  );
}

export default ContactForm;
