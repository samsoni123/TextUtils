import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpparClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleLowerClick=()=>{
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleClearClick=()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Clear text!", "success");
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copy to clipbord!", "success");
  }
  const handleExtaSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Space Remove!", "success");
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>

      <div className="mb-3">  
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>

      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpparClick}>Convert to Upparcase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowerClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtaSpaces}>Remove Space</button>
      </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>Your text summary</h1>
    <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length}  characters </p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
