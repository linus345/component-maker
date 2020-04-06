import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "options view"
    "options code";
  grid-gap: 1px;
  min-height: 100vh;
  background-color: #222;
`;

export default Layout;
