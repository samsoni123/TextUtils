import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpparClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleLowerClick=()=>{
    let newText = text.toLocaleLowerCase();
    setText(newText);
  }
  const handleClearClick=()=>{
    let newText = "";
    setText(newText);
  }
  const handleCopy=()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtaSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>

      <div className="mb-3">  
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpparClick}>Convert to Upparcase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtaSpaces}>Remove Space</button>
      </div>
    <div className='container my-3'>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters </p>
    <p>{0.008 * text.split(" ").length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}
