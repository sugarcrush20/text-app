import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
     
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","Success");
    }
    const handlelowClick=()=>{
       
         let newText=text.toLowerCase();
         setText(newText);

         props.showAlert("Converted to lowercase","Success");
     }
     const handleclearClick=()=>{
     
         let newText="";
         setText(newText);
         props.showAlert("Text cleared","Success");
     }
     const handleExtraspaces=()=>{
        props.showAlert("extra spaces trimmed","Success");
         let newText=text.split(/[ ]+/);
         setText(newText.join(" "));
     }
     const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","Success");
     }
     const handlereverse=()=>{
     
        let arr=text.split(" ");
        arr=arr.reverse();
         let newText=arr.join(" ");
         setText(newText);
         props.showAlert("Text Reversed","Success");
     }
     const speak=()=>{
      
        let msg= new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
     }
    const handleOnChange=(event)=>{
    
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    return (<>
     <div className ="container" style={{color: props.mode === 'dark'|| props.mode==='green' ?'white': '#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor:  props.mode === 'dark'|| props.mode==='green' ?'grey': 'white' ,color: props.mode === 'dark'|| props.mode==='green' ?'white': '#042743'}} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2 " onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2 " onClick={handlelowClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2 " onClick={handleclearClick}>Clear Text</button>
<button className="btn btn-primary mx-2 " onClick={handlereverse}>Reverse words</button>
<button className="btn btn-primary mx-2 " onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2 " onClick={handleExtraspaces}>Trim Extra Spaces</button>
<button className="btn btn-warning mx-2 " type="submit" onClick={speak}>Speak</button>

    </div>
    <div className="container" my-3  style={{color: props.mode === 'dark'|| props.mode==='green' ?'white': '#042743'}}>
    <h2>
        YOUR TEXT SUMMARY
    </h2>
<p>
   {text.split(" ").length} words and {text.length} characters
</p>
<p>
    {0.008 * text.split(" ").length} minute read time.
</p>
<h2>
    Preview
</h2>
<p>
    {text.length>0 ? text :"Enter your text to preview it here."}
</p>
    </div>
    </>
   
  )
}
