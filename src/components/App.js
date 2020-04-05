import React, { useState } from 'react';

import Layout from './Layout';
import OptionSection from './OptionSection';
import ViewSection from './ViewSection';
import CodeSection from './CodeSection';

function App() {
  const [bg, setBg] = useState("#000");
  return (
    <div className="App">
      <Layout>
        <OptionSection />
        <ViewSection bg={bg} />
        <CodeSection />
      </Layout>
    </div>
  );
}

export default App;
