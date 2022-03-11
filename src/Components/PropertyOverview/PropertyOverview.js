import './PropertyOverview.scss';

function PropertyOverview(props) {
	return (
		<section className='propertyoverview'>
			<div className='propertyoverview__addressbox'>
				<h3 className='propertyoverview__address'>{props.address} – {props.city} {props.province}</h3>
				<h3 className='propertyoverview__price'>${props.price}</h3>
			</div>
			<h3 className='propertyoverview__detail'>{props.beds} Beds | {props.baths} Baths  {props.sqfeet === null || props.sqfeet === '' ? '' : `| ${props.sqfeet} Sq. Ft. | `}  {props.built === null ? '' : `Built ${props.built}`}</h3>
			<div className='propertyoverview__detailbox'>
				<h4 className='propertyoverview__description'>
					{props.description}
				</h4>
				<div className={props.page !== 'featured' ? 'propertyoverview__buttonbox' : 'propertyoverview__buttonbox propertyoverview__buttonbox--inactive'}>
					{
						props.virtualTour ?
							<a href={props.virtualTour} target="_blank">
								<button className='propertyoverview__button'>VIEW VIRTUAL TOUR</button>
							</a> :
							<></>
					}
					<button onClick={() => props.setCalculatorIsOpen(!props.calculatorIsOpen)} className='propertyoverview__button'>MORTGAGE CALCULATOR</button>
				</div>
			</div>
		</section>
	);
}

export default PropertyOverview;
