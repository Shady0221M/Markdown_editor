
import './App.css';
import Navbar from './components/Navbar';
import React ,{ useState } from "react";
import Editor from './components/Editor';
import Preview from './components/Preview';
import NewSection from './components/new_section';
import Markdown from "react-markdown";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [markdown, setMarkdown] = useState('');
  const [buttons, setButtons] = useState([]);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(prevVisibility => !prevVisibility);  
  };

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  const addButton = (name) => {
    console.log(name);
    setButtons(prevButtons => [...prevButtons,name]);
  };

  const handleButtonClick=() =>{
    console.log("Hellllo");
    console.log(markdown);
    console.log(<Markdown>{markdown}</Markdown>);
  }
  return (
    <div className="App">
      <Navbar toggleVisibility={toggleVisibility} buttons={buttons}/>
      <Editor value={markdown} onChange={handleInputChange} handleButtonClick={handleButtonClick}/>
      <Preview markdown={markdown} />
      {isVisible && <NewSection addButton={addButton} toggleVisibility={toggleVisibility}/>}
      
    </div>
  );
}

export default App;
