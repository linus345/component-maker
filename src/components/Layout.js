import styled, { css } from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "tabs    view"
    "options view"
    "options code";
  grid-gap: 1px;
  min-height: 100vh;
  max-height: 100vh;
  background-color: #222;

  ${({ selectedTab }) => selectedTab === "result" && css`
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "tabs tabs"
      "view code"
      "view code";
  `}

  @media (max-width: 890px) {
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
      "tabs     tabs"
      "options  options"
      "view     view"
      "code     code";
  }
`;

export default Layout;
