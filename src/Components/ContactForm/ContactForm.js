import { firestore } from '../../firebase.js';
import './ContactForm.scss';

function ContactForm() {

    function sendMessage(name, email, message) {
      //sends the name, email and message by passing them as url parameters
      window.location.href =
        "https://us-central1-naishare.cloudfunctions.net/sendMail?name=" +
        name +
        "&email=" +
        email +
        "&message=" +
        message +
        "";
    }
  const submitHandler = (e) => {
    e.preventDefault();
    sendMessage(e.target.name.value, e.target.email.value, e.target.message.value)
    firestore.collection('mail').doc().set({
      to: [`info.jarealty@gmail.com`],
      message: {
        html: `
          <h3>Name: ${e.target.name.value}</h3>
          <h3>Email: ${e.target.email.value}</h3>
          <h3>Location: ${e.target.location.value}</h3>
          <h3>Message:</h3>
          <p>${e.target.message.value}</p>
        `,
        subject: 'IMPORTANT: Consultation Call (Inbound Inquiry: Website)',
        text: `
          Name: ${e.target.name.value}
          Email: ${e.target.email.value}
          Location: ${e.target.location.value}
          Message:
          ${e.target.message.value}
        `,
      }
    })
      .then(res => {
        console.log('Success');
        e.target.reset();
        window.alert('Submitted!');
      })
      .catch(err => {
        console.log('err');
        console.log(err);
      });
  }

  return (
    <section className='contactform'>
      <h2 className='contactform__title'>Contact us</h2>
      <form className='contactform__form' onSubmit={(e) => submitHandler(e)}>
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
