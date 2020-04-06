import React from 'react';
import styled from 'styled-components';

function ChangeNumberInput({
  label,
  styles,
  setStyles,
  currStyle,
  min = 0,
  max = 100,
  step = 1,
}) {
  return (
    <StyledChangeNumberInput>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        id={currStyle}
        value={styles[currStyle].slice(-2) === "px" ? (
          styles[currStyle].slice(0, -2)
        ) : styles[currStyle]}
        onChange={e => {
          const { value } = e.target;
          setStyles(styles => ({
            ...styles,
            [currStyle]: `${value}${styles[currStyle].slice(-2) === "px" ? (
              "px"
            ) : (
              ""
            )}`,
          }));
        }}
      />
      <label htmlFor={currStyle}>{label}</label>
    </StyledChangeNumberInput>
  );
}

const StyledChangeNumberInput = styled.div`
  display: flex;
  color: #000;
  margin: 15px 0;
  font-size: 12px;
  outline: none;

  input {
    border: none;
    border-radius: 4px 0 0 4px;
    font-size: 1.2em;
    text-align: center;
    padding-left: 5px;
  }

  label {
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 0 4px 4px 0;
    font-size: 1.4em;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default ChangeNumberInput;
