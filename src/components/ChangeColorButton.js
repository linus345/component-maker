import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import ColorPicker from './ColorPicker';
import ColorBox from './ColorBox';
import { useClickOutside } from '../utils';

function ChangeColorButton({ label, styles, setStyles, currStyle }) {
  const [pickerIsOpen, setPickerIsOpen] = useState(false);
  const buttonRef = useRef(null);

  useClickOutside(buttonRef, () => {
    setPickerIsOpen(false);
  });

  return (
    <StyledChangeColorButton
      ref={buttonRef}
      color={styles[currStyle]}
      onClick={() => setPickerIsOpen(isOpen => !isOpen)}
    >
      <ColorBox color={styles[currStyle]} />
      <p>{label}</p>
      {pickerIsOpen && (
        <ColorPicker
          styles={styles}
          setStyles={setStyles}
          currStyle={currStyle}
        />
      )}
    </StyledChangeColorButton>
  );
}

const StyledChangeColorButton = styled.button`
  position: relative;
  display: flex;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  margin: 15px 0;
  font-size: 12px;
  cursor: pointer;
  outline: none;

  p {
    margin: 5px 10px;
    font-size: 1.4em;
    font-weight: 600;
  }
`;

export default ChangeColorButton;
