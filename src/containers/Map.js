import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

import Element from 'components/Element';

const KEY = process.env.gmaps.apiKey;

const MapLayout = styled.div`
  height: 100vh;
  width: 100%;
`;

const Map = (props) => {
  const {drivers, latitude, longitude} = props;
  const center = {
    lat: Number(latitude),
    lng: Number(longitude)
  };

  return (
    <MapLayout>
      <GoogleMapReact
        bootstrapURLKeys={{ key: KEY }}
        defaultCenter={center}
        hoverDistance={30}
        defaultZoom={14}
      >
        {drivers && drivers.length > 0 && drivers.map(({id, location: {latitude, longitude}}) => 
          <Element key={id} lat={latitude} lng={longitude} text={id} />   
        )}
      </GoogleMapReact>
    </MapLayout>
  );
}

export default Map;
