import React from 'react';
import styled, { css } from 'styled-components';

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
  padding: 60px 0;
`;

const StyledButton = styled.button`
  ${({ styles }) => styles}

  // if result is true all styles should be applied (hover and active)
  ${({ result, hoverStyles, activeStyles }) => result && css`
    &:hover {
      ${() => hoverStyles}
    }

    &:active {
      ${() => activeStyles}
    }
  `}
`;

export default ViewSection;
