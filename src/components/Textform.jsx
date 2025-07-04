
import React, { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import './Textfrom.css'; // Assuming you have a CSS file for styling
const Textform = () => {
    const [text, setText] = useState("");
   
  function handleclickup(){
    let newtxt=text.toUpperCase();
    console.log("hello")
    setText(newtxt);
  }
  function handlechange(event){
    setText(event.target.value);
  }
  function handleclicklo(){
    let newtxt=text.toLowerCase();
    setText(newtxt);
  } 
  function handleclickrev(){
    let newtxt=text.split("").reverse().join("");
    setText(newtxt);
  }
  function copy(){
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard");
  }
  function reset(){
    setText("");
  }

  return (
    <>
    <div className='textform'>
       <h1>Enter Text to Analyzie</h1>
        <div className="mb-3">
            <textarea className="form-control" placeholder='Enter text' id="exampleFormControlTextarea1"value={text} onChange={handlechange} rows="8"></textarea>
            </div>
            <div className="bts">
            <button onClick={handleclickup}>Convert to uppercase</button>
             <button onClick={handleclicklo}>Convert to lowercase</button>
              <button onClick={handleclickrev}>Reverse text</button>
               <button onClick={copy}> <ContentCopyIcon style={{fontSize:"1 rem" }}/> </button>
            <button onClick={reset}>Reset</button>
            </div>
            
    </div>
    <div className="summary">
        <h2>Text Summary</h2>
        <p><b>Words:</b>{ text==="" ? 0:text.split(" ").length} <b>Characters:</b>{text.length}</p>
        <p><b>Time to read:</b>{ text===""? 0:0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here."}</p>
    </div>
    </>
  );
}

export default Textform
