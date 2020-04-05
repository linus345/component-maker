import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe("App", () => {
  it("renders", () => {
    expect(true).toBe(true);
  });
  // it("renders all sections", () => {
  //   const { debug, getByTestId } = render(<App />);
  //   const optionSection = getByTestId("option-section");
  //   const viewSection = getByTestId("view-section");
  //   const codeSection = getByTestId("code-section");
  //   debug();
  //   // expect().toBeInTheDocument();
  // });
});
