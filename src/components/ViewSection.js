import React from 'react';
import styled from 'styled-components';

function ViewSection(props) {
  return (
    <StyledViewSection>
      <StyledButton {...props}>Click me!</StyledButton>
    </StyledViewSection>
  );
}

const StyledViewSection = styled.div`
  grid-area: view;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
`;

const StyledButton = styled.button`
  ${({ styles }) => styles}
`;

export default ViewSection;
