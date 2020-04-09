import React from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';

function ColorPicker({ styles, setStyles, currStyle }) {
  const handleChange = ({ rgb }) => {
    // format rgb to css format
    const formattedRgb = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;

    setStyles(styles => ({
      ...styles,
      [currStyle]: formattedRgb,
    }))
  }

  return (
    <div
      onClick={e => e.stopPropagation()}
    >
      <StyledChromePicker
        color={styles[currStyle]}
        onChange={handleChange}
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
