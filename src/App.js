import React, {useState, useEffect} from 'react';

import './App.css';
import Header from './components/header/Header'
import Editor from './components/editor/Editor'

export default function App() {
  const defaultMarkdown = "# MRKDWN EDITOR \n --- \n"

  const md = sessionStorage.getItem("markdown")
  const [markdown, setMarkdown] = useState(md ? md : defaultMarkdown)

  const handleChange = (e) => {
    setMarkdown(e.target.value)    
  }
  useEffect(() => {
      sessionStorage.setItem("markdown", markdown)
  }, [markdown])

  
  const download = (data) => {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/markdown;charset=utf-8,' + encodeURIComponent(data));
    element.setAttribute('download', "markdown");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

  return (
    <div className="app">
      <Header onClick={() => markdown && download(markdown)}/>
      <Editor onChange={handleChange} value={markdown}source={markdown } />     
    </div>
  );
}
