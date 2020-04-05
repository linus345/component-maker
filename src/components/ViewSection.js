import React from 'react';
import styled from 'styled-components';

function ViewSection(props) {
  return (
    <StyledViewSection>
      <StyledButton {...props}>Button</StyledButton>
    </StyledViewSection>
  );
}

const StyledViewSection = styled.div`
  grid-area: view;
`;

const StyledButton = styled.button`
  background-color: ${({ bg }) => bg};
  color: white;
`;

export default ViewSection;
