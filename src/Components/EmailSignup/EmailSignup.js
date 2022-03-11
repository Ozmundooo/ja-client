import { firestore } from '../../firebase.js';
import './EmailSignup.scss';

function EmailSignup(props) {

  const submitHandler = (e) => {
    e.preventDefault();
    firestore.collection('newsletters').doc().set({
      to: [`oali@atreomedia.com`],
      message: {
        html: `
          <h3>Email: ${e.target.email.value}</h3>
        `,
        subject: 'IMPORTANT: Email Signup',
        text: `
          Email: ${e.target.email.value}
        `,
      }
    })
      .then(res => {
        console.log('Success');
        e.target.reset();
        // window.alert('Submitted!');
      })
      .catch(err => {
        console.log('err');
        console.log(err);
      });
  }

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
      <form className='emailSignup__form' onSubmit={(e) => submitHandler(e)}>
        <input className='emailSignup__input' type="email" name='email' />
        <button className='emailSignup__button' type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default EmailSignup;
