import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

import Element from 'components/Element';

const KEY = process.env.gmaps.apiKey;

const MapLayout = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Map = (props) => {
  const {drivers, latitude, longitude} = props;
  return (
    <MapLayout>
      <GoogleMapReact
        bootstrapURLKeys={{ key: KEY }}
        defaultCenter={{
          lat: latitude,
          lon: longitude,
        }}
        zoom={1}
      >
        {drivers && drivers.length > 0 && drivers.map(({id, location: {latitude, longitude}}) => 
          <Element key={id} lat={latitude} lng={longitude} text={id} />   
        )}
      </GoogleMapReact>
    </MapLayout>
  );
}

export default Map;
