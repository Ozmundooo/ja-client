import { firestore } from '../../firebase.js';
import './RequestForm.scss';

function RequestForm(props) {

  const submitHandler = (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let email = e.target.email.value;
    let message = e.target.message.value;
    let address = props.address;

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
