import React from 'react';
import styled from 'styled-components';

function Tabs({ tabs, selectedTab, setSelectedTab }) {
  return (
    <StyledTabs>
      {tabs.map(tab => (
        <div
          key={tab}
          className={selectedTab === tab ? "tab-button active" : "tab-button"}
          onClick={() => setSelectedTab(tab)}
        >
          <p>{tab}</p>
        </div>
      ))}
    </StyledTabs>
  );
}

const StyledTabs = styled.div`
  grid-area: tabs;
  display: flex;
  color: #fff;
  background-color: #000;

  .tab-button {
    padding: 10px 15px;
    cursor: pointer;
    background-color: #222;

    &:hover {
      background-color: #111;
    }

    &.active {
      border-top: 2px solid #007DFF;
      background-color: #000;
    }

    p {
      font-size: 18px;
      text-transform: capitalize;
    }

    @media (max-width: 890px) {
      padding: 10px 12px;

      p {
        font-size: 15px;
      }
    }
  }
`;

export default Tabs;
