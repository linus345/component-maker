import React from 'react';
import styled from 'styled-components';

import ChangeColorButton from './ChangeColorButton';
import ChangeNumberInput from './ChangeNumberInput';
import ChangeColorAndNumberInput from './ChangeColorAndNumberInput';

function OptionSection({ styles, setStyles }) {
  return (
    <StyledOptionSection>
      <ChangeColorButton
        label="Background color"
        styles={styles}
        setStyles={setStyles}
        currStyle="background-color"
      />
      <ChangeColorButton
        label="Color"
        styles={styles}
        setStyles={setStyles}
        currStyle="color"
      />
      <ChangeColorAndNumberInput
        label="Border"
        styles={styles}
        setStyles={setStyles}
        currColorStyle="border-color"
        currNumberStyle="border-width"
      />
      <ChangeNumberInput
        label="Border radius"
        styles={styles}
        setStyles={setStyles}
        currStyle="border-radius"
      />
      <ChangeNumberInput
        label="Font size"
        styles={styles}
        setStyles={setStyles}
        currStyle="font-size"
      />
      <ChangeNumberInput
        label="Font weight"
        styles={styles}
        setStyles={setStyles}
        currStyle="font-weight"
        min="0"
        max="700"
        step="100"
      />
      <ChangeNumberInput
        label="Padding"
        styles={styles}
        setStyles={setStyles}
        currStyle="padding"
      />
    </StyledOptionSection>
  );
}

const StyledOptionSection = styled.div`
  grid-area: options;
  background-color: #000;
  color: #fff;
  padding: 40px;
`;

export default OptionSection;
