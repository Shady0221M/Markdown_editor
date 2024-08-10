import React ,{ useState } from "react";
import './new_section.css';

function NewSection({ addButton ,toggleVisibility}) {
  const [newButton, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit=(event)=>{
    event.preventDefault();
    addButton(newButton.trim());
    setInputValue('');
    toggleVisibility();
  }
  return (
    <div className="newsection">
        <form id='new' onSubmit={handleSubmit}>
            <input type='text' minLength='5' value={newButton} onChange={handleInputChange}></input>
            <button type='submit'>Create</button>
        </form>
    </div>
  );
}

export default NewSection;