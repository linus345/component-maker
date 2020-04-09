import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/rainbow.css';
import css from 'highlight.js/lib/languages/css';

function formatStyles(styles, selectedTab, buttonClass) {
  const copy = Object.assign({}, styles);
  // format border property
  const border = `${copy["border-width"]} solid ${copy["border-color"]}`;
  copy["border"] = border;
  delete copy["border-width"];
  delete copy["border-color"];
  // format pseudo element
  const selector = buttonClass ? `.${buttonClass}` : "button";
  const pseudo = selectedTab === "default" ? "" : `:${selectedTab}`;
  return (
    `${selector}${pseudo} ${JSON.stringify(copy, null, 2)
    .replace(/"/g, "")
    .replace(/,/g, ";")}\n\n`
  )
}

function CodeSection({ styles, selectedTab, allStyles = null, buttonClass }) {
  const [isCopied, setIsCopied] = useState("copy");
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.registerLanguage('css', css);
  }, []);

  useEffect(() => {
    if(codeRef && codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
    setIsCopied("copy");
  }, [codeRef, styles, selectedTab, buttonClass]);

  return (
    <StyledCodeSection>
      <div className="code-box">
        {navigator.clipboard && (
          <button
            className="copy"
            onClick={async () => {
              try {
                navigator.clipboard.writeText(codeRef.current.innerText);
                setIsCopied("copied");
              } catch (e) {
                setIsCopied("failed");
              }
            }}
          >
            {isCopied}
          </button>
        )}
        <pre>
          <code
            ref={codeRef}
            className="css"
          >
            {allStyles ? (
              allStyles.map(styles => (
                formatStyles(styles.styles, styles.pseudo, buttonClass)
              ))
            ) : (
              formatStyles(styles, selectedTab, buttonClass)
            )}
          </code>
        </pre>
      </div>
    </StyledCodeSection>
  );
}

const StyledCodeSection = styled.div`
  grid-area: code;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  padding: 60px 0;
  height: 100%;
  max-height: 100%;
  overflow: hidden;

  .code-box {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    max-height: 100%;
    background-color: #17181b;
    border-radius: 1px;
    box-shadow:
      0 0 0 3px #242425,
      0 0 0 6px #131314,
      0 0 0 9px #035cb9;
    padding: 20px 25px;
    overflow: scroll;

    button.copy {
      align-self: flex-end;
      background-color: #000;
      border: none;
      border-radius: 4px;
      color: #fff;
      padding: 5px 10px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      margin-bottom: 4px;
    }

    pre {
      background-color: #17181b;
      code {
        background-color: #17181b;
      }
    }
  }
`;

export default CodeSection;
