import React, { useState } from 'react';

import Layout from './Layout';
import OptionSection from './OptionSection';
import ViewSection from './ViewSection';
import CodeSection from './CodeSection';
import { 
  defaultStyles,
  defaultHoverStyles,
  defaultActiveStyles
} from '../defaultStyles';

function App() {
  const [selectedTab, setSelectedTab] = useState("result");
  const [styles, setStyles] = useState(defaultStyles);
  const [hoverStyles, setHoverStyles] = useState(defaultHoverStyles);
  const [activeStyles, setActiveStyles] = useState(defaultActiveStyles);

  return (
    <div className="App">
      <Layout>
        <OptionSection styles={styles} setStyles={setStyles} />
        <ViewSection styles={styles} />
        <CodeSection styles={styles} />
      </Layout>
    </div>
  );
}

export default App;
