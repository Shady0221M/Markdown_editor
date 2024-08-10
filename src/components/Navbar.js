
import './Navbar.css';


function Navbar({ toggleVisibility ,buttons}) {
  return (
    <div className="Navbar">
        <div className='sections'>
        <button className="new-section">Header</button>
        {buttons.map((button, index) => (
          <button className="new-section" key={index}>{button}</button>
        ))}
        </div>
      
      <button id="Adds" onClick={toggleVisibility}>+</button>
    </div>
  );
}

export default Navbar;