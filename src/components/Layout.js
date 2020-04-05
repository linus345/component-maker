import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "options view"
    "options code";
  min-height: 100vh;
`;

export default Layout;
