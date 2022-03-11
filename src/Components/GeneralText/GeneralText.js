import './GeneralText.scss';

function GeneralText(props) {
  return (
    <section
      className={
        props.buttons ?
          'generaltext generaltext--withbutton' :
          props.notop !== true ?
            'generaltext' :
            'generaltext generaltext--notop'
        }>
      <div className={'generaltext__content'}>
        <h3 className='generaltext__title'>{props.title}</h3>
        <p className='generaltext__text'>{props.text}</p>
        { props.buttons ?
          <div className='generaltext__buttonbox'>
            <a className='generaltext__link' href={props.buttons.buttonOne.link}>
              <button className='generaltext__button'>{props.buttons.buttonOne.text}</button>
            </a>
            <a className='generaltext__link' href={props.buttons.buttonTwo.link}>
              <button className='generaltext__button'>{props.buttons.buttonTwo.text}</button>
            </a>
          </div> :
          <></>
        }
      </div>
    </section>
  );
}

export default GeneralText;