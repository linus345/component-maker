import React from 'react';

import OptionSection from './OptionSection';
import ViewSection from './ViewSection';
import CodeSection from './CodeSection';

function Tab({
  styles,
  setStyles,
  selectedTab,
  buttonText,
  setButtonText,
  buttonClass,
  setButtonClass
}) {
  return (
    <>
      <OptionSection
        styles={styles}
        setStyles={setStyles}
        buttonText={buttonText}
        setButtonText={setButtonText}
        buttonClass={buttonClass}
        setButtonClass={setButtonClass}
      />
      <ViewSection styles={styles} buttonText={buttonText} />
      <CodeSection
        styles={styles}
        selectedTab={selectedTab}
        buttonClass={buttonClass}
      />
    </>
  );
}

export default Tab;
