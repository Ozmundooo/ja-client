import { firestore } from '../../firebase.js';
import './RequestForm.scss';

function RequestForm(props) {
  let address = props.address;
  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <section className='requestform'>
      <div className='requestform__infobox'>
        <h4 className='requestform__title'>Request more info or a showing</h4>
        <h5 className='requestform__subtitle'>J.A Real Estate Group</h5>
        <p className='requestform__text'>Phone: 1-500-504-5551</p>
        <p className='requestform__text'>Email: julian@j-arealeastate.com</p>
      </div>
      <form className='requestform__form' action="https://formsubmit.co/740cce934af42c546b08598c738a3350" method="POST">
      <input type="hidden" name="_subject" value={props.address + ": Request Form"}></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="Address" value={props.address}></input>
        <input type="hidden" name="_next" value={window.location.origin}></input>
        
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
