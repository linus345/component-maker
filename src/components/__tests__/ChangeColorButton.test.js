import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChangeColorButton from '../ChangeColorButton';

afterEach(cleanup);

describe("ChangeColorButton", () => {
  it("opens color picker when button is clicked", () => {
    const label = "Background color";
    const { getByText, getByTestId, debug } = render(
      <ChangeColorButton label={label} color="#ff0000" />
    );

    // fireEvent.click(getByText(label));

    // debug();

    // expect(getByTestId("color-picker")).toEqual(expect.anything());
  });
});
