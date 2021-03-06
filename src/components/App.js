import React, { useState } from 'react';

import Layout from './Layout';
import Tabs from './Tabs';
import Tab from './Tab';
import ViewSection from './ViewSection';
import CodeSection from './CodeSection';
import { 
  defaultStyles,
  defaultHoverStyles,
  defaultFocusStyles,
  defaultActiveStyles
} from '../defaultStyles';

function App() {
  const [selectedTab, setSelectedTab] = useState("default");
  const [buttonText, setButtonText] = useState("Click me!");
  const [buttonClass, setButtonClass] = useState("");
  const [styles, setStyles] = useState(defaultStyles);
  const [hoverStyles, setHoverStyles] = useState(defaultHoverStyles);
  const [focusStyles, setFocusStyles] = useState(defaultFocusStyles);
  const [activeStyles, setActiveStyles] = useState(defaultActiveStyles);

  return (
    <div className="App">
      <Layout selectedTab={selectedTab}>
        <Tabs
          tabs={["default", "hover", "focus", "active", "result"]}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab === "default" ? (
          <Tab
            styles={styles}
            setStyles={setStyles}
            selectedTab={selectedTab}
            buttonText={buttonText}
            setButtonText={setButtonText}
            buttonClass={buttonClass}
            setButtonClass={setButtonClass}
          />
        ) : selectedTab === "hover" ? (
          <Tab
            styles={hoverStyles}
            setStyles={setHoverStyles}
            selectedTab={selectedTab}
            buttonText={buttonText}
            setButtonText={setButtonText}
            buttonClass={buttonClass}
            setButtonClass={setButtonClass}
          />
        ) : selectedTab === "focus" ? (
          <Tab
            styles={focusStyles}
            setStyles={setFocusStyles}
            selectedTab={selectedTab}
            buttonText={buttonText}
            setButtonText={setButtonText}
            buttonClass={buttonClass}
            setButtonClass={setButtonClass}
          />
        ) : selectedTab === "active" ? (
          <Tab
            styles={activeStyles}
            setStyles={setActiveStyles}
            selectedTab={selectedTab}
            buttonText={buttonText}
            setButtonText={setButtonText}
            buttonClass={buttonClass}
            setButtonClass={setButtonClass}
          />
        ) : (
          // result tab
          <>
            <ViewSection
              styles={styles}
              hoverStyles={hoverStyles}
              focusStyles={focusStyles}
              activeStyles={activeStyles}
              buttonText={buttonText}
              result={1}
            />
            <CodeSection
              styles={styles}
              selectedTab={selectedTab}
              allStyles={[
                {
                  styles: styles,
                  pseudo: "default",
                },
                {
                  styles: hoverStyles,
                  pseudo: "hover",
                },
                {
                  styles: focusStyles,
                  pseudo: "focus",
                },
                {
                  styles: activeStyles,
                  pseudo: "active",
                },
              ]}
              buttonClass={buttonClass}
            />
          </>
        )}
      </Layout>
    </div>
  );
}

export default App;
