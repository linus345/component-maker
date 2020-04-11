import React from 'react';
import styled from 'styled-components';

import ChangeColorButton from './ChangeColorButton';
import ChangeNumberInput from './ChangeNumberInput';
import ChangeColorAndNumberInput from './ChangeColorAndNumberInput';
import TextInput from './TextInput';

function OptionSection({
  styles,
  setStyles,
  buttonText,
  setButtonText,
  buttonClass,
  setButtonClass
}) {
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
        label="Padding top"
        styles={styles}
        setStyles={setStyles}
        currStyle="padding-top"
      />
      <ChangeNumberInput
        label="Padding bottom"
        styles={styles}
        setStyles={setStyles}
        currStyle="padding-bottom"
      />
      <ChangeNumberInput
        label="Padding right"
        styles={styles}
        setStyles={setStyles}
        currStyle="padding-right"
      />
      <ChangeNumberInput
        label="Padding left"
        styles={styles}
        setStyles={setStyles}
        currStyle="padding-left"
      />
      <TextInput
        label="Button text"
        placeholder="Text..."
        value={buttonText}
        setValue={setButtonText}
      />
      <TextInput
        label="Button class"
        placeholder="Class..."
        value={buttonClass}
        setValue={setButtonClass}
      />
    </StyledOptionSection>
  );
}

const StyledOptionSection = styled.div`
  grid-area: options;
  background-color: #000;
  color: #fff;
  padding: 40px;
  overflow: scroll;
`;

export default OptionSection;
