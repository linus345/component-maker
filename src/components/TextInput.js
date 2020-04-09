import React from 'react';
import styled from 'styled-components';

function TextInput({ label, placeholder, value, setValue }) {
  return (
    <StyledTextInput>
      {label}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </StyledTextInput>
  );
}

const StyledTextInput = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 15px;
  font-weight: 700;
  margin-top: 10px;

  input {
    border: 2px solid black;
    border-radius: 4px;
    padding: 5px;
    font-size: 15px;
    outline: none;

    &:focus {
      border: 2px solid #3F9EFF;
    }
  }
`;

export default TextInput;
