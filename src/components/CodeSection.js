import React from 'react';
import styled from 'styled-components';

function CodeSection() {
  return (
    <StyledCodeSection>
      <h1>code</h1>
    </StyledCodeSection>
  );
}

const StyledCodeSection = styled.div`
  grid-area: code;
`;

export default CodeSection;
