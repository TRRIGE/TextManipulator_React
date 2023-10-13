import React, { useState } from 'react'

export default function TextForm(props) {

const handleUpClick = ()=>{
  const newtext = text.toUpperCase();
  setText(newtext);
  props.showAlert("Converted to Uppercase","success");
};

const handleLoClick = ()=>{
  const newtext = text.toLowerCase();
  setText(newtext);
  props.showAlert("Converted to Lowercase","success");
};

const handleClearClick = ()=>{
  const newtext = "";
  setText(newtext);
  props.showAlert("Text Cleared","success");
};

const handleCopyClick = ()=>{
  navigator.clipboard.writeText(text);
  props.showAlert("Text Copied","success");
};

const handleExtraSpaceClick = ()=>{
  var newtext = text.split(/[ ]+/);
  setText(newtext.join(" "));
  props.showAlert("Unecessary Spaces Removed","success");
};

const handleOnChange = (event)=>{
  console.log("on changed");
  setText(event.target.value);
};

const [text, setText] = useState("");
  return (
  <>
  <div className='container' style={{color: props.mode=== 'light'?'black':'white'}}>
    <h2 className='my-3'>{props.heading}</h2>
    <div className="mb-3">
        <label htmlFor="forTextBox" className="form-label">Enter Text to Analyze</label>
        <textarea className="form-control" id="forTextBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'light'?'white':'#4682A9',color: props.mode=== 'light'?'black':'white'}} placeholder='Whats on your mind!'></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleUpClick}>To Uppercase</button>
    <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleLoClick}>To Lowercase</button>
    <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleClearClick}>To Clear</button>
    <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleCopyClick}>To copy</button>
    <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleExtraSpaceClick}>To remove Extra Spaces</button>


  </div>

  <div className='container my-3' style={{color: props.mode=== 'light'?'black':'white'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} times to read</p>

    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter the Text to Preview"}</p>
  </div>
  </>
  )
}
