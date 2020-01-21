import React, {
  useState
} from "react";
import styled from 'styled-components';

const SlideLayout = styled.div`
  height: 20px;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 9999;
`;

const Input = styled.input.attrs({ 
  type: 'range',
})` 
  border-radius: 5px;
  cursor: pointer;
  height: 35px;
  opacity: 0.7;
  outline: none;
  transition: 0.15s;
  width: 300px;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-runnable-track {
    background-color: #1ad3ed;
    border-radius: 35px;
    height: 8px;
    outline: none;
  }

  &::-webkit-slider-thumb {
    height: 30px;
    position: relative;
    top: -3px;
    width: 30px;
  }
`;

const Position = styled.div`
  background-color: #1ad3ed;
  border: 3px solid #1bcae7; 
  color: #fff;
  left: 50%;
  position: absolute;
  width: 30px;
`;

const Slide = ({ initialSize, minSize, maxSize, count, setCount }) => {
  const [position, setPosition] = useState(count);
  const handleChange = event => {
    setPosition(event.target.value);
  };

  const handleRelease = event => {
    setCount(position);
  };

  return (
    <SlideLayout>
      <Input
        type="range"
        min={minSize}
        max={maxSize}
        value={position}
        onChange={handleChange}
        onMouseUp={handleRelease}
      />
      <Position>{position}</Position>
    </SlideLayout>
  );
};

export default Slide;
