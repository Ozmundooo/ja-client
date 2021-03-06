import { firestore } from '../../firebase.js';
import './EmailSignup.scss';

function EmailSignup(props) {
  return (
    <section
      className={
        props.theme === 'navy' ?
          'emailSignup' :
          props.notop !== true ? 'emailSignup emailSignup--brown' : 'emailSignup emailSignup--brown emailSignup--notop'
      }>
      <div className='emailSignup__textbox'>
        <h3 className='emailSignup__title'>
          {props.theme === 'navy' ?
            'Be the first one to know' :
            'Want to stay up to date with our properties?'
          }
        </h3>
        <p className='emailSignup__text'>
          {props.theme === 'navy' ?
            'Stay up to date on new purchase opportunities, investments and industry trends' :
            'Sign up to be the first one to receive our new featured listings before they hit the market'
          }
        </p>
      </div>
      <form className='emailSignup__form' action="https://formsubmit.co/740cce934af42c546b08598c738a3350" method="POST">
        <input className='emailSignup__input' type="email" name='email' placeholder='Enter your email' />
        <input type="hidden" name="_subject" value="Newsletters: New Email"></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_next" value={window.location.origin}></input>
        <button className='emailSignup__button' type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default EmailSignup;
