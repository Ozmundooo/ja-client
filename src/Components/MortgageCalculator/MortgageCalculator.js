import React from 'react';
import './MortgageCalculator.scss';

function MortgageCalculator(props) {
  const [monthlyRate, setMonthlyRate] = React.useState(0);
  const [downpayment, setDownpayment] = React.useState(0);
  const [interestValue, setInterestValue] = React.useState(0);
  const [payoffValue, setPayoffValue] = React.useState(0);

  React.useEffect(() => {
    setDownpayment(props.price * 0.05);
  }, [props.price]);

  const submitHandler = (e) => {
    e.preventDefault();
    let propertyPrice = props.price;
    let p = propertyPrice - downpayment ;
    let i = interestValue /100 / 12;
    let n = payoffValue * 12;
    let monthlyPayment = p * i * (Math.pow(1 + i, n));
    monthlyPayment = monthlyPayment / (Math.pow(1 + i, n) - 1)
    setMonthlyRate(Math.round(monthlyPayment * 100) / 100 );
  }

  const downpaymentCalculator = (e) => {
    let downpaymentValue = e.target.value * props.price;
    setDownpayment(downpaymentValue);
  }

  const resetHandler = (e) => {
    setInterestValue(0);
    setPayoffValue(0);
    setMonthlyRate(0);
  }

  return (
    <section className='mortgage'>
      <h2 className='mortgage__title'>Mortgage calculator</h2>
      <form className='mortgage__form' onSubmit={(e) => submitHandler(e)}>
        <div className='mortgage__subbox'>
          <h3 className='mortgage__subtitle'>Estimated payment:</h3>
          <h3 className='mortgage__subtitle mortgage__subtitle--big'>${monthlyRate ? monthlyRate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0}/month</h3>
          <p className='mortgage__warning'>Calculations and scenarios are for demonstration purposes only.</p>
        </div>
        <div className='mortgage__inputcont'>
          <div className='mortgage__inputbox'>
            <label className='mortgage__label' htmlFor="price">Purchase price ($)</label>
            <input
              className='mortgage__input'
              type="text"
              name='price'
              disabled={true}
              value={`${props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
            />
            <label className='mortgage__label' htmlFor="downpayment">Downpayment (%)</label>
            <div className='mortgage__selectbox'>
              <select className='mortgage__select' onChange={(e) => downpaymentCalculator(e)} name="downpayment">
                <option value="0.05">5</option>
                <option value="0.10">10</option>
                <option value="0.15">15</option>
                <option value="0.20">20</option>
                <option value="0.25">25</option>
                <option value="0.30">30</option>
                <option value="0.35">35</option>
                <option value="0.40">40</option>
                <option value="0.45">45</option>
                <option value="0.50">50</option>
              </select>
              <p className='mortgage__downtext'>${downpayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </div>
            <button className='mortgage__button' onClick={resetHandler}>RESET</button>
          </div>
          <div className='mortgage__inputbox'>
            <label className='mortgage__label' htmlFor="interest">Interest rate (%)</label>
            <input
              className='mortgage__input'
              type="number"
              name='interest'
              value={interestValue}
              onChange={(e) => setInterestValue(e.target.value)}
            />
            <label className='mortgage__label' htmlFor="payoff">Payoff (Years)</label>
            <input
              className='mortgage__input'
              type="number"
              name='payoff'
              value={payoffValue}
              onChange={(e) => setPayoffValue(e.target.value)}
            />
            <button className='mortgage__button' type='submit'>CALCULATE</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default MortgageCalculator;
