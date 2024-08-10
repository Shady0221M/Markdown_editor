
import './Editor.css';


function Editor({value,handleButtonClick,onChange}) {
  return (
    <div className="Editor">
      <button onClick={handleButtonClick}>Get</button>
      <textarea id="input" placeholder="Write your markdown here..." name='markdown_content' onChange={onChange} value={value} ></textarea>
    </div>
  );
}

export default Editor;