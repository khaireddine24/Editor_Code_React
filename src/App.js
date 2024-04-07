import React, { useState, useEffect } from 'react';
import Editor from "./components/Editor";

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [javascript, setJavascript] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>${html}</body>
          <script>${javascript}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, javascript]);

  return (
    <div className="app">
      <div className="pane top-pane">
        <Editor
          language="html"
          label="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          label="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          label="JavaScript"
          value={javascript}
          onChange={setJavascript}
        />
      </div>
      <div className="bottom-pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
