import styled from 'styled-components';

const ColorBox = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ color }) => color};
  border-radius: 4px 0 0 4px;
  cursor: pointer;
`;

export default ColorBox;
