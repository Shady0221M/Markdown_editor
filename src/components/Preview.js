import React from 'react';  
import Markdown from 'react-markdown';
import './Preview.css';


function Preview({markdown}) {
  return (
    <div className="Preview">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}

export default Preview;