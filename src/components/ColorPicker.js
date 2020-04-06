import React from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';

function ColorPicker({ styles, setStyles, currStyle }) {
  return (
    <div
      onClick={e => e.stopPropagation()}
    >
      <StyledChromePicker
        // disableAlpha
        color={styles[currStyle]}
        onChange={color => setStyles(styles => ({
          ...styles,
          [currStyle]: color.hex,
        }))}
      />
    </div>
  );
}

const StyledChromePicker = styled(ChromePicker)`
  position: absolute;
  top: 35px;
  left: 0;
  z-index: 10;
  outline: none;
`;

export default ColorPicker;
