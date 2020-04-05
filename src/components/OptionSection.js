import React from 'react';
import styled from 'styled-components';

function OptionSection() {
  return (
    <StyledOptionSection>
      <h1>options</h1>
    </StyledOptionSection>
  );
}

const StyledOptionSection = styled.div`
  grid-area: options;
`;

export default OptionSection;
