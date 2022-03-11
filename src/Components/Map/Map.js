import React from 'react';
import {
	GoogleMap,
	withScriptjs,
	withGoogleMap,
	Marker,
	InfoWindow
} from 'react-google-maps';

function Map(props) {
	const [propertyCoord, setPropertyCoord] = React.useState({
		lat: 0,
		lng: 0
	});
  const [cityCoord, setCityCoord] = React.useState({
  	lat: 0,
  	lng: 0
  });

  React.useEffect(() => {
  	setPropertyCoord({
  		lat: props.propertyCoord.lat,
  		lng: props.propertyCoord.lng
  	});
  	setCityCoord({
  		lat: props.cityCoord.lat,
  		lng: props.cityCoord.lng
  	});
  }, [props.cityCoord, props.propertyCoord])

	return (
		<>
			{ cityCoord !== { lat:0, lng: 0 } ?
				<GoogleMap
					defaultZoom={11}
					defaultCenter={{ lat: cityCoord.lat, lng: cityCoord.lng }}
					center={{ lat: cityCoord.lat, lng: cityCoord.lng }}
				>
					<Marker
						position={{
							lat: propertyCoord.lat,
							lng: propertyCoord.lng
						}}
					/>
				</GoogleMap>:
				<></>
			}
		</>
	)
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;