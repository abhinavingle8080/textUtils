import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [outputText, setOutputText] = useState('');

    const handleDownClick = () => {
        setOutputText(text.toLowerCase());
    }

    const handleUpClick = () => {
        setOutputText(text.toUpperCase());
    }

    const handleOnChange = (event) => {

        const newText = event.target.value;
        setText(newText);
        setOutputText(newText);
    }

    const calculateWordCount = (inputText) => {
        if (inputText.trim() === '') {
            return 0;
        }
        // Remove leading and trailing white spaces, and split the text into words
        const words = inputText.trim().split(/\s+/);
        return words.length;
    }

    const handleClearText = ()=>{
        setText('');
        setOutputText('');
    }

    return (
        <>
            <div className="my-5">
                <h4>{props.heading}</h4>
                <div className="mb-3">
          <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
              placeholder="Enter your text here"
          ></textarea>
                </div>
                <button className="btn mx-1 btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn mx-1 btn-primary" onClick={handleDownClick}>Convert to SmallerCase</button>
                <button className="btn mx-1 btn-primary" onClick={handleClearText}>Clear Text</button>

            </div>
            <div className="container">
                <h5>Text Summary</h5>
                <p>{calculateWordCount(text)} Words, {text.length} Characters</p>
                <p>Time to Read: {0.008 * calculateWordCount(text)} minutes</p>
            </div>
            <h4>Output:</h4>
            <textarea className="form-control"
                      defaultValue={outputText}
                      id="outputBox"
                      rows="5"
                      onChange={handleOnChange}
                      placeholder={"Your output will be shown here"}
            ></textarea>
        </>
    )
}
