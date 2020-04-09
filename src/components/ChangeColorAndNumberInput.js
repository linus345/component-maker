import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import ColorPicker from './ColorPicker';
import ColorBox from './ColorBox';
import ChangeNumberInput from './ChangeNumberInput';
import { useClickOutside } from '../utils';

function ChangeColorAndNumberInput({
  label,
  styles,
  setStyles,
  currColorStyle,
  currNumberStyle,
  min = 0,
  max = 100,
  step = 1,
}) {
  const [pickerIsOpen, setPickerIsOpen] = useState(false);
  const buttonRef = useRef(null);

  useClickOutside(buttonRef, () => {
    setPickerIsOpen(false);
  });

  return (
    <StyledChangeColorAndNumberInput>
      <ColorBox
        onClick={() => setPickerIsOpen(true)}
        color={styles[currColorStyle]}
      />
      {pickerIsOpen && (
        <div
          ref={buttonRef}
        >
          <ColorPicker
            styles={styles}
            setStyles={setStyles}
            currStyle={currColorStyle}
          />
        </div>
      )}
      <ChangeNumberInput
        label={label}
        styles={styles}
        setStyles={setStyles}
        currStyle={currNumberStyle}
        min={min}
        max={max}
        step={step}
      />
    </StyledChangeColorAndNumberInput>
  );
}

const StyledChangeColorAndNumberInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #000;
  font-size: 12px;
  outline: none;

  & > div {
    margin: 0;
  }

  input {
    border-radius: 0;
    margin: 0;
  }
`;

export default ChangeColorAndNumberInput;
