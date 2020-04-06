import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/rainbow.css';
import css from 'highlight.js/lib/languages/css';

function stylesToCSS(styles) {
  const copy = Object.assign({}, styles);
  // format border property
  const border = `${copy["border-width"]} solid ${copy["border-color"]}`;
  copy["border"] = border;
  delete copy["border-width"];
  delete copy["border-color"];
  return JSON.stringify(copy, null, 2)
    .replace(/"/g, "")
    .replace(/,/g, ";");
}

function CodeSection({ styles }) {
  const codeRef = useRef(null);
  const hlCode = stylesToCSS(styles);

  useEffect(() => {
    hljs.registerLanguage('css', css);
  }, []);

  useEffect(() => {
    if(codeRef && codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [codeRef, styles]);

  return (
    <StyledCodeSection>
      <div className="code-box">
        <pre>
          <code
            ref={codeRef}
            className="css"
          >
            {`button ${hlCode}`}
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

  .code-box {
    width: 80%;
    background-color: #17181b;
    border-radius: 1px;
    box-shadow:
      0 0 0 3px #242425,
      0 0 0 6px #131314,
      0 0 0 9px #035cb9;
    padding: 20px 25px;

    pre {
      code {
        background-color: #17181b;
      }
    }
  }
`;

export default CodeSection;
