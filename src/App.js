import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import './styles/App.css';
import './styles/Global.css';

function App() {
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);

  return (
    <div className="App">
      <input value={value}
        onChange={(e) => { setCopied(false); setValue(e.target.value) }} 
      />
      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <span>Copy to clipboard with span</span>
      </CopyToClipboard>
 
      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <button>Copy</button>
      </CopyToClipboard>
 
      {copied ? <span style={{color: 'red', margin: '0 auto'}}>Copied.</span> : null}
    </div>
  );
}

export default App;
