import React, { useState } from 'react';

import Layout from './Layout';
import OptionSection from './OptionSection';
import ViewSection from './ViewSection';
import CodeSection from './CodeSection';

function App() {
  const [styles, setStyles] = useState({
    "background-color": "#007DFF",
    "color": "#fff",
    "border-width": "2px",
    "border-color": "#007DFF",
    "border-radius": "8px",
    "font-size": "18px",
    "font-weight": "700",
    "padding": "15px",
    "cursor": "pointer",
  });
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
