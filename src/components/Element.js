import React from 'react';
import styled from 'styled-components';

import Tooltip from './Tooltip';

const ElementLayout = styled.div`
  background-color: #1bcae7;
  border-radius: 10px;
  height: 10px;
  position: relative;
  width: 10px;
`;


const Element = ({text}) => (
  <ElementLayout>
    <Tooltip>{text}</Tooltip>
  </ElementLayout>
);

export default Element;
