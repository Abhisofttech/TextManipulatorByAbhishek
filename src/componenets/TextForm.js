import React, { useState  , useEffect } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter Your Text");
    // let mode = props.mode;

    let upperCase = () => {

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to upper case", "success")
    }
    let lowerCase = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to lower case", "success")
    }
    let clearText = () => {
        let newText = " ";
        setText(newText);
        props.showAlert("Text has been cleared", "success")
    }
    let onChangeText = (event) => {

        setText(event.target.value);
    }
    // Togle the mode either in dark or light


    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    
    useEffect(() => {
        if (props.mode === 'dark') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            });
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
        }
    }, [props.mode]);

   


    return (
        < >

            <div className="container my-3" style={myStyle}>
                <div className="mb-3">
                    <h1>{props.title}</h1>
                    <textarea className="form-control" style={myStyle} id="exampleFormControlTextarea1" value={text} onChange={onChangeText} rows="8"></textarea>
                    <button disabled={text.length===0} className="btn btn-primary my-4 mx-2 " onClick={upperCase} >Convert to UPPER case</button>
                    <button disabled={text.length===0} className="btn btn-primary my-4 mx-2 " onClick={lowerCase} >Convert to LOWER case</button>
                    <button disabled={text.length===0} className="btn btn-primary my-4 mx-2 " onClick={clearText} >Clear Text</button>
                    {/* <button className="btn btn-primary my-4 mx-2 " onClick={toggleMode} >{btnText}</button> */}
                </div>
            </div>
            <div className="container" style={myStyle}>
                <h1>Text Summary</h1>
                <p> {(text.split(" ").filter((a)=>{return a.length!==0})).length} word  {text.length} characters</p>

                <h2>Your Text</h2>

                <p>{text}</p>
            </div>
        </>
    )
}

