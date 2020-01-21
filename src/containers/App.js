import React, {
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';

import driversResponseAdapter from 'api/interfaces/adapters/drivers-response-adapter';
import { getDrivers } from 'api/routes/drivers';

import Slider from 'components/Slider';
import Map from 'containers/Map';

const CENTER_LATITUDE = process.env.gmaps.latitude;
const CENTER_LONGITUDE = process.env.gmaps.longitude;

const AppLayout = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const fetchData = async (latitude, longitude, count) => {
  try {
    const {data: drivers} = await getDrivers(latitude, longitude, count);
    return driversResponseAdapter(drivers);
  } catch (error) {
    return [];
  }
};

const App = (props) => {
  const [latitude, setLatitude] = useState(CENTER_LATITUDE);
  const [longitude, setLongitude] = useState(CENTER_LONGITUDE);
  const [count, setCount] = useState(1);
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const runEffect = async () => {
      setDrivers(await fetchData(latitude, longitude, count));
    };

    runEffect();
  }, [latitude, longitude, count]);

  return (
    <AppLayout className="appLayout">
      <Slider initialSize={1} minSize={1} maxSize={50} count={count} setCount={setCount} />
      <Map latitude={latitude} longitude={longitude} drivers={drivers} />
    </AppLayout>
  );
}

export default App;
