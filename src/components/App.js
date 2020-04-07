import React, { useState } from 'react';

import Layout from './Layout';
import Tabs from './Tabs';
import Tab from './Tab';
import ViewSection from './ViewSection';
import CodeSection from './CodeSection';
import { 
  defaultStyles,
  defaultHoverStyles,
  defaultActiveStyles
} from '../defaultStyles';

function App() {
  const [selectedTab, setSelectedTab] = useState("default");
  const [styles, setStyles] = useState(defaultStyles);
  const [hoverStyles, setHoverStyles] = useState(defaultHoverStyles);
  const [activeStyles, setActiveStyles] = useState(defaultActiveStyles);

  return (
    <div className="App">
      <Layout selectedTab={selectedTab}>
        <Tabs
          tabs={["default", "hover", "active", "result"]}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab === "default" ? (
          <Tab
            styles={styles}
            setStyles={setStyles}
            selectedTab={selectedTab}
          />
        ) : selectedTab === "hover" ? (
          <Tab
            styles={hoverStyles}
            setStyles={setHoverStyles}
            selectedTab={selectedTab}
          />
        ) : selectedTab === "active" ? (
          <Tab
            styles={activeStyles}
            setStyles={setActiveStyles}
            selectedTab={selectedTab}
          />
        ) : (
          // result tab
          <>
            <ViewSection
              styles={styles}
              hoverStyles={hoverStyles}
              activeStyles={activeStyles}
              result={1}
            />
            <CodeSection
              styles={styles}
              selectedTab={selectedTab}
              result={1}
              allStyles={[
                {
                  styles: styles,
                  pseudo: "",
                },
                {
                  styles: hoverStyles,
                  pseudo: ":hover",
                },
                {
                  styles: activeStyles,
                  pseudo: ":active",
                },
              ]}
            />
          </>
        )}
      </Layout>
    </div>
  );
}

export default App;
