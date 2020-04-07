import React from 'react';

import OptionSection from './OptionSection';
import ViewSection from './ViewSection';
import CodeSection from './CodeSection';

function Tab({ styles, setStyles, selectedTab }) {
  return (
    <>
      <OptionSection
        styles={styles}
        setStyles={setStyles}
      />
      <ViewSection styles={styles} />
      <CodeSection styles={styles} selectedTab={selectedTab} />
    </>
  );
}

export default Tab;
