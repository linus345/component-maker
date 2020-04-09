import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { TwitterPicker } from 'react-color';

import { useClickOutside } from '../utils';

function ViewSection(props) {
  const [previewBg, setPreviewBg] = useState("#000");
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const pickerRef = useRef(null);

  useClickOutside(pickerRef, () => setIsPickerOpen(false));

  return (
    <StyledViewSection previewBg={previewBg}>
      <button
        className="change-color"
        onClick={() => setIsPickerOpen(isOpen => !isOpen)}
      >
        color
      </button>
      {isPickerOpen && (
        <div ref={pickerRef} className="color-picker">
          <TwitterPicker
            onChange={color => setPreviewBg(color.hex)}
            colors={[
              "#000000",
              "#FFFFFF",
              "#FF6900",
              "#FCB900",
              "#00D084",
              "#8ED1FC",
              "#0693E3",
              "#EB144C",
              "#F78DA7",
              "#9900EF"
            ]}
          />
        </div>
      )}
      <StyledButton {...props}>{props.buttonText}</StyledButton>
    </StyledViewSection>
  );
}

const StyledViewSection = styled.div`
  position: relative;
  grid-area: view;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ previewBg }) => previewBg};
  color: #fff;
  padding: 60px 0;

  button.change-color {
    position: absolute;
    top: 10px;
    left: 20px;
    background-color: black;
    border: none;
    border-radius: 4px;
    color: #fff;
    padding: 3px 6px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }

  .color-picker {
    position: absolute;
    top: 50px;
    left: 23px;
  }
`;

const StyledButton = styled.button`
  ${({ styles }) => styles}

  // if result is true all styles should be applied (hover and active)
  ${({ result, hoverStyles, focusStyles, activeStyles }) => result && css`
    &:hover {
      ${() => hoverStyles}
    }

    &:focus {
      ${() => focusStyles}
    }

    &:active {
      ${() => activeStyles}
    }
  `}
`;

export default ViewSection;
