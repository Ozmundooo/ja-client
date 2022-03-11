import { firestore } from '../../firebase.js';
import './RequestForm.scss';

function RequestForm() {

  const submitHandler = (e) => {
    e.preventDefault();
    firestore.collection('mail').doc().set({
      to: [`jyou@atreomedia.com`],
      message: {
        html: `
          <h3>Name: ${e.target.name.value}</h3>
          <h3>Email: ${e.target.email.value}</h3>
          <h3>Message:</h3>
          <p>${e.target.message.value}</p>
        `,
        subject: 'IMPORTANT: Consultation Call (Inbound Inquiry: Website)',
        text: `
          Name: ${e.target.name.value}
          Email: ${e.target.email.value}
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
    <section className='requestform'>
      <div className='requestform__infobox'>
        <h4 className='requestform__title'>Request more info or a showing</h4>
        <h5 className='requestform__subtitle'>J.A Real Estate Group</h5>
        <p className='requestform__text'>Phone: 1-500-504-5551</p>
        <p className='requestform__text'>Email: julian@j-arealeastate.com</p>
      </div>
      <form className='requestform__form' onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          className='requestform__textinput'
          name='name'
          placeholder='Name'
        />
        <input
          type="email"
          className='requestform__textinput'
          name='email'
          placeholder='Email'
        />
        <textarea
          className='requestform__textarea'
          name="message"
          placeholder='Message'
        >
        </textarea>
        <button className='requestform__button' type='submit'>SUBMIT</button>
      </form>
    </section>
  );
}

export default RequestForm;
